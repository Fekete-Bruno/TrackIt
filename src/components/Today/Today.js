import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

export default function Today(){
    return(
            <Wrapper>
                <Header />
                TODAY PAGE
                <Footer />
            </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: rgba(242,242,242,1);
    width: 100vw;
    height: 100vh;
`;