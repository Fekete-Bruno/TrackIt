import { useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SignupScreen from "./SignupScreen/SignupScreen";
import UserContext from "../contexts/UserContext";
import Today from "./Today/Today";
import PrivatePage from "./PrivatePage/PrivatePage";

export default function App(){
    const [token,setToken] = useState(null);

    return(
        <UserContext.Provider value={{token,setToken}}>
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
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}