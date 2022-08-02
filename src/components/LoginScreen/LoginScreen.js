import styled from "styled-components";
import logo from "../../images/TrackIt-Logo.png";

export default function LoginScreen(){
    return(
        <Wrapper>
            <img src={logo} alt="TrackIt Logo" />
            Hello World!
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh 0;

    img{
        width: 50vw;
    }

    /* KEEPING IT FOR THE NEXT SCREENS: font-family: 'Playball', cursive; */
`;