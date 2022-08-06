import styled from "styled-components";

export default function CreatorBox({setCreate}){
    return(
        <Wrapper>
            <Input placeholder="Name your habit" />
            <div>WEEKDAYS ROW</div>
            <Form>
                <div onClick={() => { setCreate(false); } }>CANCEL</div>
                <div>SEND</div>
            </Form>
        </Wrapper>
    );
}

const Form = styled.span`
    display: flex;
    justify-content: flex-end;
`

const Input = styled.input`
    border: 1px solid #D5D5D5;
    height: 5vh;
    border-radius:6px;
    padding: 2.5vw;
    font-size: 2.5vh;
    color: rgba(100, 100, 100, 1);

    &::placeholder{
        color:rgba(200, 200, 200, 1);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6vh;
    padding:2vh;
    background-color: white;
    height: 20vh;
    border-radius: 6px;
`;