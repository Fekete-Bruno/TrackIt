import styled from "styled-components";
import { Link } from "react-router-dom";
import FormWrapper from "../../themes/Form Wrapper";
import logo from "../../images/TrackIt-Logo.png";

export default function LoginScreen(){
    return(
        <FormWrapper>
            <img src={logo} alt="TrackIt Logo" />

            <form onSubmit={(event)=>{
                event.preventDefault();
                console.log('hey');
                }}>
		    <input type="email" placeholder="email" required />
		    <input type="password" placeholder="password" required />
            <div></div>
		    <button type="submit">Log In</button>
		    </form>
            <Link to="/signup">
                <SignUpButton>New to TrackIt? Sign up!</SignUpButton>
            </Link>
        </FormWrapper>
    );
}

const SignUpButton = styled.div`
    color: rgba(82, 182, 255, 1);
    text-decoration: underline;
    font-size: 2vh;
`;