import {FormWrapper, LogButton} from "../../themes/Form Wrapper";
import { Link } from "react-router-dom";
import logo from "../../images/TrackIt-Logo.png";

export default function SignupScreen(){
    return(
        <FormWrapper>
            <img src={logo} alt="TrackIt Logo" />
            <form onSubmit={(event)=>{
                event.preventDefault();
                console.log('hey');
                }}>
		    <input type="email" placeholder="email" required />
		    <input type="password" placeholder="password" required />
		    <input type="text" placeholder="name" required />
		    <input type="text" placeholder="image" required />
            <div></div>
		    <button type="submit">Sign Up</button>
		    </form>
            <Link to="/">
                <LogButton>Already have an account? Log in!</LogButton>
            </Link>
        </FormWrapper>
    );
}