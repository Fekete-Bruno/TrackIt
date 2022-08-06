import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Habits(){
    return(
        <Wrapper> 
            <Header />
            <HabitsWrapper>
                <div>
                    <h1>My Habits</h1>
                    <button><div>+</div></button>
                </div>
            </HabitsWrapper>    
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: rgba(242,242,242,1);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const HabitsWrapper = styled.div`
    padding-top: 12vh;
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
        width: 6vw;
        height: 3vh;
        font-size: 3vh;
        border-radius: 5px;
    }

    &>div{
        font-size: 3vh;
        color:rgba(18, 107, 165, 1);
        display: flex;
        justify-content: space-between;
    }
`;