import { Link } from "react-router-dom";
import {FormWrapper , LogButton} from "../../themes/Form Wrapper";
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
		    <button type="submit">Log In</button>
		    </form>
            
            <Link to="/signup">
                <LogButton>New to TrackIt? Sign up!</LogButton>
            </Link>
        </FormWrapper>
    );
}