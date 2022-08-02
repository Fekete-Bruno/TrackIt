import { Fragment } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import GlobalStyle from "../themes/globalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";

export default function App(){
    return(
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}