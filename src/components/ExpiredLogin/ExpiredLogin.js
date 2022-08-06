import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import logo from "../../images/TrackIt-Logo.png";
import { FormWrapper } from "../../styles/Form Wrapper";

export default function ExpiredLogin(){
    const navigate = useNavigate();
    const {setAuth} = useContext(UserContext);
    return(
        <Wrapper>
            <img src={logo} alt="TrackIt Logo" />
            <h1>Your login expired!</h1>
            <button onClick={()=>{
                navigate("/");
                setAuth(null);}}
             >Return to Login Screen</button>
            
        </Wrapper>
    );
}


const Wrapper = styled(FormWrapper)`
    margin: 0 auto;
    width: 90vw;

    &>*{
        margin:2vh;
    }

    h1{
        font-size: 3vh;
    }
`;