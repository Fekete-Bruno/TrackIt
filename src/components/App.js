import { useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import UserContext from "../contexts/UserContext";
import Today from "./Today/Today";
import PrivatePage from "./PrivatePage/PrivatePage";
import Habits from "./Habits/Habits";
import ExpiredLogin from "./ExpiredLogin/ExpiredLogin";

export default function App(){
    const [auth,setAuth] = useState(null);
    const localData = JSON.parse(localStorage.getItem("trackit"));
    
    if(localData && !auth){
        setAuth(localData);
    }

    return(
        <UserContext.Provider value={{auth,setAuth}}>
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
                    <Route path="/expired" element={<ExpiredLogin />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}