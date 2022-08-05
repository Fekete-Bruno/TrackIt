import styled from "styled-components";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// DELETE AFTER AXIOS GET IS DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const HARD_PER_CENT = 90;
// after all that I can add something to change progress bar color after finishing

export default function Footer(){

    const barText = "Hoje";
    const barColor = "rgba(82, 182, 255, 1)";

    return(
        <Wrapper>
            <div>Hábitos</div>

            <ProgressBarWrapper>
                <CircularProgressbarWithChildren value={HARD_PER_CENT} background backgroundPadding={6}
                styles={buildStyles({
                    pathColor: "white",
                    backgroundColor: barColor,
                    trailColor:"transparent",
                })}
                >{barText}</CircularProgressbarWithChildren>
            </ProgressBarWrapper>

            <div>Histórico</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    color:rgba(82, 182, 255, 1);
    font-size: 2.5vh;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const ProgressBarWrapper = styled.div`
    height: 12vh;
    width: 12vh;
    margin-bottom:6vh;
    color: white;
`;