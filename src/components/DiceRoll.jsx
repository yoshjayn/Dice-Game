import styled from "styled-components";


const DiceRoll = ({currentRoll, rollDice}) => {


return (
<Container>
    <div className="dice" onClick={rollDice}>
        <img src={`/images/roll/dice_${currentRoll}.png`} alt="roll" />
    </div>
    <p>click on dice to roll</p>
</Container>
)
}

export default DiceRoll;

const Container = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor:pointer;
}
p{
    font-size: 24px;
    text-transform: capitalize;
}
`
