import { Link } from "react-router-dom";
import {FormWrapper , LogButton} from "../../styles/Form Wrapper";
import logo from "../../images/TrackIt-Logo.png";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoginScreen(){
    const [disabled, setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Log In');

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
    }
    
    return(
        <FormWrapper>
            <img src={logo} alt="TrackIt Logo" />

            <form onSubmit={sendForm}>
		    <input type="email" placeholder="email" required disabled={disabled} />
		    <input type="password" placeholder="password" required disabled={disabled} />
		    <button type="submit" disabled={disabled}>{innerButton}</button>
		    </form>
            
            <Link to="/signup">
                <LogButton>New to TrackIt? Sign up!</LogButton>
            </Link>
        </FormWrapper>
    );
}