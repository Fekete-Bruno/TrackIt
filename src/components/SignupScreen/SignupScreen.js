import {FormWrapper, LogButton} from "../../styles/Form Wrapper";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../images/TrackIt-Logo.png";

export default function SignupScreen(){
    const [disabled,setDisabled] = useState(false)
    const [innerButton,setInnerButton] = useState('Sign Up')

    function formHandler(event){
        event.preventDefault();
        console.log('hey');
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
    }

    return(
        <FormWrapper>
            <img src={logo} alt="TrackIt Logo" />

            <form onSubmit={formHandler}>
		    <input type="email" placeholder="email" required disabled={disabled} />
		    <input type="password" placeholder="password" required disabled={disabled} />
		    <input type="text" placeholder="name" required disabled={disabled} />
		    <input type="text" placeholder="image" required disabled={disabled} />
		    <button type="submit">{innerButton}</button>
		    </form>
            
            <Link to="/">
                <LogButton>Already have an account? Log in!</LogButton>
            </Link>
        </FormWrapper>
    );
}