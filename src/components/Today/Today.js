import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";
import { getToday , errorMessage, postCheck, postUncheck } from "../../services/axiosHandler";
import { useEffect, useState } from "react";
import { Backdrop } from "../../styles/globalStyles";
import dayjs from "dayjs";


export default function Today(){
    const [habits,setHabits] = useState([]);
    const [check,setCheck] = useState (true)
    useEffect(()=>{
        const promise = getToday();
        promise.then((res)=>{
            setHabits(res.data)}
        );
        promise.catch((res)=>{errorMessage(res.response);});
    },[check]);
    const date = ("0"+dayjs().date()).slice(-2);
    const month = ("0"+(dayjs().month()+1)).slice(-2);
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const weekday = week[dayjs().day()];
    console.log(habits);
    
    return(
            <Wrapper>
                <Backdrop />
                <Header />
                <TodayWrapper>
                    <Title>{`${weekday}, ${month}/${date}`}</Title>
                    <SubTitle>{(habits.filter((habit)=>{return(habit.done)}))?('none'):('some')}</SubTitle>
                    {(habits)?(habits.map((habit,index)=>{return(<Habit habit={habit} check={check} setCheck={setCheck} key={index}/>)})):(<></>)}
                </TodayWrapper>
                <Footer habits={habits}/>
            </Wrapper>
    );
}

function Habit({habit,check,setCheck}){
    
    function checker(){
        if(!habit.done){
            const request=postCheck(habit.id);
            request.then(()=>{setCheck(!check)});
            request.catch((res)=>{errorMessage(res.response)});
        } else {
            const request = postUncheck(habit.id);
            request.then(()=>{setCheck(!check)});
            request.catch((res)=>{errorMessage(res.response)});
        }
    }

    return(
        <HabitBox>
            <HabitText>
            <h1>{habit.name}</h1>
            <h2>Current sequence: <Current>{habit.currentSequence} days</Current></h2>
            <h2>Highest sequence: <Highest>{habit.highestSequence} days</Highest> </h2>
            </HabitText>
            <Check isDone={habit.done} onClick={checker}><ion-icon name="checkmark-sharp"></ion-icon></Check>
        </HabitBox>
    );
}

const Highest = styled.span`
    background-color: blue;
`;

const Current = styled.span`
    background-color: red;
`;

const HabitText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:2vh;
    &>h2,&>span{
        font-size: 2vh;
    }
`;

const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    height: 10vh;
    width: 10vh;
    margin:2vh; 
    border-radius: 6px;
    font-size: 6vh;
    background-color: ${props=>props.isDone?'rgba(143, 197, 73, 1)':'rgba(231, 231, 231, 1)'};//rgba(231, 231, 231, 1);

    &:hover{
        cursor: pointer;
    }
`;

const HabitBox = styled.div`
    display: flex;
    justify-content: space-between;
    color:rgba(102, 102, 102, 1);
    background-color: white;
    border-radius:6px;
    margin: 1vh 0;
`;

const SubTitle = styled.div`
    background-color: blue;
`;

const Title = styled.div`
    color: rgba(18, 107, 165, 1);
    font-size: 4vh;
`;

const TodayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12vh 5vw;
`;

const Wrapper = styled.div`
    width: 100vw;
`;