import styled from "styled-components";
import Score from "./Score";
import Selector from "./Selector";
import DiceRoll from "./DiceRoll";
import Rules from "./Rules";
import { useState } from "react";


const GamePlay = () => {
    const [score, setScore] = useState(0);
const [selectedNum, setSelectedNum] = useState();
const [currentRoll, setCurrentRoll] = useState(1);
const[error, setError] = useState("");
//role dice function ko v yaha lana pdega

const RandomNum = (min, max) => {
    return Math.floor(Math.random()*(max-min)+min);
    };
const rollDice=() =>{
if(! selectedNum) {
    setError("No Number Selected");
    return;
}

const randomNum = RandomNum(1,7);
    
    setCurrentRoll((prev) => randomNum);
    
    if(selectedNum==randomNum){
        setScore((prev) => prev + randomNum);
    } else{
        setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
    };
const resetScore = () => {
    setScore(0);
};
const [showTrue, setShowTrue] = useState(false);



return (
    <Main>
        <div className="top-section">
<Score score={score}/>
<Selector 
        error={error}
        setError={setError}
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
/>
        </div>
<DiceRoll currentRoll={currentRoll}
            rollDice={rollDice}
        
/>
<div className="clicks">
    <OutlineButton
    onClick={resetScore}>
        Reset</OutlineButton>
    <Button
    onClick={ ()=> setShowTrue((p)=>!p) }>
        {showTrue ?"Hide" :"Show"} Rules
        </Button>
</div>
{ showTrue && <Rules />}
    </Main>
);
};

export default GamePlay;

const Main = styled.main`
// padding-top: 70px;
height:100vh;

.top-section{
    display:flex;
    justify-content: space-around;
    align-items: end;
}
.clicks{
    margin-top:40px;
    display: flex;
    flex-direction: column;
    justify-elements: center;
    align-items: center;
    gap:10px;

}`;
const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: 1px solid transparent;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color:black;
    transition: 0.3s background ease-in;
        
    }
`;

const OutlineButton = styled(Button)`
    color: black;
    background: white;
    border: 1px solid black;
    &:hover{
        background-color: black;
        border: 1px solid black;
        color:white;
    transition: 0.3s background ease-in;
        
    }
`;


