import { useEffect, useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {GlobalStyle} from "../styles/globalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import UserContext from "../contexts/UserContext";
import Today from "./Today/Today";
import PrivatePage from "./PrivatePage/PrivatePage";
import Habits from "./Habits/Habits";
import ExpiredLogin from "./ExpiredLogin/ExpiredLogin";
import History from "./History/History";
import { errorMessage, getToday } from "../services/axiosHandler";

export default function App(){
    const [auth,setAuth] = useState(null);
    const localData = JSON.parse(localStorage.getItem("trackit"));
    const [percentage,setPercentage] = useState(0);
    const [habits,setHabits] = useState([]);
    const [check,setCheck] = useState (true);

    useEffect(()=>{
        if(auth){
            const promise = getToday();
            promise.then((res)=>{
                setHabits(res.data);
            });
            promise.catch((res)=>{errorMessage(res.response);});
        }
    },[check,auth]);

    useEffect(()=>{
        setPercentage(Math.round(100*(habits.filter((habit)=>{return habit.done}).length/habits.length)));
    },[habits,setPercentage])
    
    if(localData && !auth){
        setAuth(localData);
    }

    return(
        <UserContext.Provider value={{auth,setAuth,percentage,setPercentage,habits,check,setCheck}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/today" element={
                        <PrivatePage >
                            <Today />
                        </PrivatePage>
                    } />

                    <Route path="/habits" element={
                        <PrivatePage >
                            <Habits />
                        </PrivatePage>
                    } />

                    <Route path="/history" element={
                        <PrivatePage >
                            <History />
                        </PrivatePage>
                    } />

                    <Route path="/expired" element={<ExpiredLogin />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}