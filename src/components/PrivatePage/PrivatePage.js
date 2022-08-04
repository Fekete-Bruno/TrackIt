import logo from "../../images/TrackIt-Logo.png";
import styled from "styled-components";
import { FormWrapper } from "../../styles/Form Wrapper";
import { useNavigate } from "react-router-dom";

const SEC = 1000;
const HR = 3600*SEC;

export default function PrivatePage({ children }) {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("trackit"));
    
    function renderError() {
        localStorage.clear("trackit");
        return (
            <Wrapper>
                <img src={logo} alt="TrackIt Logo" />
                <h1>Your login expired!</h1>
                <button onClick={()=>{navigate("/");}}>Return to Login Screen</button>
            </Wrapper>
        );
    }

    if (!auth) {
      return(renderError());
    }
  
    const now = +new Date();
    const timeLogged = auth.timestamp;
    console.log(HR-(now-timeLogged));

    if (now - timeLogged <= HR) {
        return (
        <>
          {children}
        </>
        );
    } else {
        return(renderError());
    }
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