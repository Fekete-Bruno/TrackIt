import styled from "styled-components";
import { Backdrop } from "../../styles/globalStyles";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function History(){
    return(
        <Wrapper>
            <Backdrop />
            <Header />
                <Content>
                    <Title>History</Title>
                    <SubTitle>Soon you will be able to access your habit history here!</SubTitle>
                </Content>
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12vh;
`;

const Content = styled.div`
    width: 90%;
`;

const Title = styled.div`
    color: rgba(18, 107, 165, 1);
    font-size: 4vh;
`;

const SubTitle = styled.div`
    margin: 1vh 0;
    color:${props=>(props.percentage>0)?'rgba(143, 197, 73, 1)':'rgba(186, 186, 186, 1)'};
`;