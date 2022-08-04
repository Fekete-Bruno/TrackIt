import {FormWrapper, LogButton} from "../../styles/Form Wrapper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../images/TrackIt-Logo.png";
import { postSignup } from "../../services/axiosHandler";


export default function SignupScreen(){
    const [disabled,setDisabled] = useState(false); 
    const [innerButton,setInnerButton] = useState('Sign Up');
    const [form,setForm] = useState({});
    const navigate = useNavigate();

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value,
          });
    }

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
        const request = postSignup(form);
        request.then(()=>navigate("/"));
        request.catch((res)=>resetForm(res.response));
    }

    function resetForm(resp){
        const initial=0;
        const txt = 'Attention: ';
        if(resp.data.details){
            alert(txt+resp.data.details[initial]);
        } else if(resp.data.message){
            alert(txt+resp.data.message);
        } else {
            alert('ERROR '+resp.status);
        }
        setDisabled(false);
        setInnerButton('Sign Up');
    }

    return(
        <FormWrapper>
            <img src={logo} alt="TrackIt Logo" />

            <form onSubmit={sendForm}>
		    <input type="email" placeholder="email" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name:e.target.placeholder,
                        value:e.target.value,
                    }
                    );
                }
            }/>
		    <input type="password" placeholder="password" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name:e.target.placeholder,
                        value:e.target.value,
                    }
                    );
                }
            }/>
		    <input type="text" placeholder="name" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name:e.target.placeholder,
                        value:e.target.value,
                    }
                    );
                }
            }/>
		    <input type="text" placeholder="image" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name:e.target.placeholder,
                        value:e.target.value,
                    }
                    );
                }
            }/>
		    <button type="submit" disabled={disabled}>{innerButton}</button>
		    </form>
            
            <Link to="/">
                <LogButton>Already have an account? Log in!</LogButton>
            </Link>
        </FormWrapper>
    );
}