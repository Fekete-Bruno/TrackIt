import { useState } from "react";
import styled from "styled-components";
import { errorMessage, postHabits } from "../../services/axiosHandler";

export default function CreatorBox({setCreate}){
    const [weekdays,setWeekdays] = useState([
        {day:0,name:'S',selected:false},
        {day:1,name:'M',selected:false},
        {day:2,name:'T',selected:false},
        {day:3,name:'W',selected:false},
        {day:4,name:'T',selected:false},
        {day:5,name:'F',selected:false},
        {day:6,name:'S',selected:false}]
    );

    const [days,setDays] = useState([]);
    const [form,setForm] = useState({name:''});

    function addDays(){
        const newDays = weekdays.filter((day)=>{return(day.selected)}).map((day)=>{return(day.day)});
        setDays([...newDays]);
    }

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value
        });
    }

    function sendHabit(){
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

        const request = postHabits(body);
        request.then(()=>{setCreate(false)});
        request.catch((res)=>errorMessage(res.response));
    }

    return(
        <Wrapper>
            <Input placeholder="Name your habit" name="name" value={form.name} onChange={
                (e)=>{
                    handleForm({value:e.target.value,name:e.target.name})
                }}/>
            <BoxWrapper>{weekdays.map((day,index)=>{
                return(
                    <DayBox day={day} addDays={addDays} key={index} />
                );
            })}</BoxWrapper>
            <Form>
                <div onClick={() => { setCreate(false); } }>Cancel</div>
                <span onClick={sendHabit}>Send</span>
            </Form>
        </Wrapper>
    );
}

function DayBox({day,addDays}){
    function handleDays(){
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
    background-color:${props=>props.isSelected?'rgba(219, 219, 219, 1)':'white'};
    color:${props=>props.isSelected?'white':'rgba(219, 219, 219, 1)'};
    height: 4vh;
    width: 4vh;
    border-radius: 6px;
    border:1px solid rgba(219, 219, 219, 1);
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