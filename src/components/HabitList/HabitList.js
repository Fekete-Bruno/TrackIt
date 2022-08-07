import styled from "styled-components";
import { deleteHabit, errorMessage } from "../../services/axiosHandler";
import { Box, BoxWrapper, Wrapper } from "../CreatorBox/CreatorBox";

export default function HabitList({habits,deleted,setDeleted}){
    const weekdays = [
        {day:0,name:'S'},
        {day:1,name:'M'},
        {day:2,name:'T'},
        {day:3,name:'W'},
        {day:4,name:'T'},
        {day:5,name:'F'},
        {day:6,name:'S'}
    ];

    function deleteHabits(id){
        const request = deleteHabit(id);
        request.then(()=>{setDeleted(!deleted);});
        request.catch((res=>{errorMessage(res.response)}));
    }

    function checkDelete(id){ 
        if(window.confirm('Do you want to delete this habit?')){
            deleteHabits(id);
        }
    }

    return(
        habits.map((habit,index)=>{return(
            <Habit key={index}>
                <Title>{habit.name}<div onClick={()=>{checkDelete(habit.id);}}><ion-icon name="trash-outline"></ion-icon></div></Title>
                
                <BoxWrapper>
                    {weekdays.map((weekday,index)=>{
                        return(<Box isSelected={habit.days.includes(weekday.day)} key={index}>{weekday.name}</Box>);
                    })}
                </BoxWrapper>
            </Habit>
        );})
    );
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    color:rgba(102, 102, 102, 1);

    ion-icon:hover{
        cursor: pointer;
    }
`;

const Habit = styled(Wrapper)`
    height: 10vh;
`;