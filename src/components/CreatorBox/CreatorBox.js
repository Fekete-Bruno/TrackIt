import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { errorMessage, postHabits } from "../../services/axiosHandler";

export default function CreatorBox({setCreate,initialState,weekdays,setWeekdays,form,setForm}){

    const [disabled,setDisabled] = useState(false);

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value
        });
    }

    function addDays(){
        setWeekdays([...weekdays]);
    }

    function sendHabit(){
        const days = weekdays.filter((day)=>{return(day.selected)}).map((day)=>{return(day.day)});
        const body = {
            ...form,
            days
        };
        if(body.name.length===0){
            alert('Please write the name of your habit!');
            return;
        }
        if(body.days.length===0){
            alert('Select at least one day of the week!');
            return;
        }
        if(disabled){
            return;
        }
        setDisabled(true);
        
        const request = postHabits( body);
        request.then(()=>{
            setForm({name:''});
            setWeekdays(initialState);
            setCreate(false);}
        );
        request.catch((res)=>{
            errorMessage(res.response);
            setDisabled(false);
        });
    }

    return(
        <Wrapper>
            <Input placeholder="Name your habit" name="name" disabled={disabled} value={form.name} onChange={
                (e)=>{
                    handleForm({value:e.target.value,name:e.target.name})
                }}/>
            <BoxWrapper>{weekdays.map((day,index)=>{
                return(
                    <DayBox disabled={disabled} day={day} addDays={addDays} key={index} />
                );
            })}</BoxWrapper>
            <Form>
                <div onClick={() => {
                    if(disabled){return;}
                    setCreate(false); } }>Cancel
                </div>
                <span onClick={sendHabit}>
                    {(!disabled)?('Send'):(<ThreeDots color="white"/>)}
                </span>
            </Form>
        </Wrapper>
    );
}

function DayBox({day,addDays,disabled}){

    function handleDays(){
        if(disabled){
            return;
        }
        day.selected = !day.selected;
        addDays();
    }
    return(
        <Box onClick={handleDays} isSelected={day.selected}>{day.name}</Box>
    );
}

const BoxWrapper = styled.div`
    display:flex;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1vh 1vw;
    background-color:${props=>props.isSelected?'rgba(207, 207, 207, 1)':'white'};
    color:${props=>props.isSelected?'white':'rgba(207, 207, 207, 1)'};
    height: 4vh;
    width: 4vh;
    border-radius: 6px;
    border:1px solid rgba(207, 207, 207, 1);
    &:hover{
        cursor: pointer;
    }
`;

const Form = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &>* {
        margin: 1vh 2vw;
    }
    &>*:hover{
        cursor: pointer;
    }

    div{
        color:rgba(82, 182, 255, 1);
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16vw;
        height:5vh;
        background-color: rgba(82, 182, 255, 1);
        color: white;
        border-radius: 6px;
    }
    span>div{
        width: 90%;
    }
`

const Input = styled.input`
    border: 1px solid #D5D5D5;
    height: 5vh;
    border-radius:6px;
    padding: 2.5vw;
    font-size: 2.5vh;
    color: rgba(100, 100, 100, 1);

    &::placeholder{
        color:rgba(200, 200, 200, 1);
    }

    &:disabled{
        background-color: rgba(242, 242, 242, 1);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
    padding:2vh;
    background-color: white;
    height: 20vh;
    border-radius: 6px;
`;

export {Wrapper,Box,BoxWrapper};