import styled from "styled-components";


const LogButton = styled.div`
    color: rgba(82, 182, 255, 1);
    text-decoration: underline;
    font-size: 2vh;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img{
        width: 50vw;
    }

    form{
        margin: 5vh 0;
        box-sizing: border-box;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        padding: 0 3vw;
        margin: 0.5vh auto;
        width: 100%;
        height: 7vh;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 3vh;
    }

    input::placeholder{
        color:rgba(200, 200, 200, 1);
    }

    button{
        margin: 0.5vh auto;
        color: rgba(255,255,255,1);
        font-size: 3vh;
        background-color: rgba(82, 182, 255, 1);
        width: 100%;
        height: 7vh;
        border: none;
        border-radius: 5px;
    }

    button:hover{
        cursor: pointer;
        background-color: rgba(82, 182, 255, 0.8);
    }

    /* KEEPING IT FOR THE NEXT SCREENS: font-family: 'Playball', cursive; */
`;

export {FormWrapper, LogButton};