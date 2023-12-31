import styled from "styled-components"

const StartGame = ({toggle}) => {
return (
<Container>
    <div>
    <img src="/images/dices.png" alt="dices" />
    </div>
    <div className="content">
        <h1>DICE GAME</h1>
    <Button onClick={toggle}>Play Now</Button>
    </div>
</Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width:1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            
        }
    }
`;

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }

`;