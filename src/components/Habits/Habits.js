import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { errorMessage, getHabits } from "../../services/axiosHandler";
import { Backdrop } from "../../styles/globalStyles";
import CreatorBox from "../CreatorBox/CreatorBox";
import Footer from "../Footer/Footer";
import HabitList from "../HabitList/HabitList";
import Header from "../Header/Header";

export default function Habits(){
    const {check,setCheck} = useContext(UserContext);
    const noHabits = 'You have no habits logged yet. Add a habit to start tracking it!';
    const initialState = [   
        {day:0,name:'S',selected:false},
        {day:1,name:'M',selected:false},
        {day:2,name:'T',selected:false},
        {day:3,name:'W',selected:false},
        {day:4,name:'T',selected:false},
        {day:5,name:'F',selected:false},
        {day:6,name:'S',selected:false}
    ];
    const [habits,setHabits] = useState([]);
    const [create,setCreate] = useState(false);
    const [deleted,setDeleted] = useState(false);
    const [form,setForm] = useState({name:''});
    const [weekdays,setWeekdays] = useState(initialState);

    useEffect(()=>{
        const promise = getHabits();
        promise.then((res)=>{
            setHabits(res.data);
            setCheck(!check);
        });
        promise.catch((res)=>{errorMessage(res.response);});
    },[create,deleted]);

    return(
        <Wrapper>
            
            <Backdrop /> 
            <Header />
            <HabitsWrapper>
                <div>
                    <h1>My Habits</h1>
                    <button onClick={()=>{setCreate(true)}}><div>+</div></button>
                </div>
                {
                    (create)?(<CreatorBox 
                        setCreate={setCreate}
                        weekdays={weekdays}
                        setWeekdays={setWeekdays}
                        form={form}
                        setForm={setForm}
                        initialState={initialState}
                    />):(<></>)
                }
                <HabitList habits={habits} deleted={deleted} setDeleted={setDeleted}/>
                <NoHabits>{(habits.length===0)?(noHabits):(<></>)}</NoHabits>
            </HabitsWrapper>    
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const HabitsWrapper = styled.div`
    padding: 12vh 0;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 80%;
    button{
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        background-color: rgba(82, 182, 255, 1);
        width: 8vw;
        height: 4vh;
        font-size: 3vh;
        border-radius: 6px;
    }

    button:hover{
        cursor: pointer;
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        color:rgba(18, 107, 165, 1);
    }

    &>div{
        font-size: 3vh;
        display: flex;
        justify-content: space-between;
    }
`;


const NoHabits = styled.h3`
    font-size: 3vh;
    color:rgba(102, 102, 102, 1);
    margin-top: 5vh;
`;