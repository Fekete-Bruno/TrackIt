import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";


export default function Header(){
    const {auth} = useContext(UserContext);

    return(
        <Wrapper>
            <div>TrackIt</div>
            <img src={auth.image} alt="Profile"/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 8vh;
    box-sizing: border-box;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 5vh;
    color: white;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    &>*{
        font-family: 'Playball', cursive;
        margin:5vw;
    }

    img{
        height: 7vh;
        width: 7vh;
        object-fit: cover;
        border-radius: 50%;
    }

`;