import { Link, useNavigate } from "react-router-dom";
import {FormWrapper , LogButton} from "../../styles/Form Wrapper";
import logo from "../../images/TrackIt-Logo.png";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { postLogin } from "../../services/axiosHandler";
import UserContext from "../../contexts/UserContext";

export default function LoginScreen(){
    const {auth,setAuth} = useContext(UserContext)
    const [disabled, setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Log In');
    const [form,setForm] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        if(auth){
            navigate("/today");
        }
    }
    ,[auth,navigate]);
    

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value,
          });
    }

    function handleSuccess(res){
        const obj = {
            timestamp: +new Date(),
            token: res.data.token,
        };
        localStorage.setItem('trackit',JSON.stringify(obj));
        setAuth(obj);
        navigate('/today');
    }

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
        const request = postLogin(form);
        request.then((res)=>{handleSuccess(res)});
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
        setInnerButton('Log In');
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
		    <button type="submit" disabled={disabled}>{innerButton}</button>
		    </form>
            
            <Link to="/signup">
                <LogButton>New to TrackIt? Sign up!</LogButton>
            </Link>
        </FormWrapper>
    );
}