import styled from "styled-components";
const Rules = () => {
return (
<Container>
    <h1>How To Play Dice Game</h1>
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
    <p>if you get wrong guess then  2 point will be dedcuted </p>
</Container>
)
}

export default Rules;

const Container = styled.div`
max-width:794px;
margin: 0 auto;
padding: 20px;
background-color: rgb(251, 241, 241);
margin-top: 50px;

h1{
font-size: 24px;
margin: 10px 0 30px 0;
}
p{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    
}

`


