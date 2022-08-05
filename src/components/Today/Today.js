import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";
import { getHabits , errorMessage } from "../../services/axiosHandler";
import { useEffect, useState } from "react";


export default function Today(){
    const [habits,setHabits] = useState(null);
    useEffect(()=>{
        const promise = getHabits();
        promise.then((res)=>{setHabits(res.data)});
        promise.catch((res)=>{errorMessage(res.response);});
    },[]);

    return(
            <Wrapper>
                <Header />
                TODAY PAGE
                <Footer habits={habits}/>
            </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: rgba(242,242,242,1);
    width: 100vw;
    height: 100vh;
`;