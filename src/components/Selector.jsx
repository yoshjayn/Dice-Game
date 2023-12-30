import styled from "styled-components"

const Selector = ({setError, error, selectedNum, setSelectedNum}) => {
const arrNum = [1, 2, 3, 4, 5, 6];

const selectorHandler=(value)=>{
    setSelectedNum(value);
    setError("");
}

return (
<SelectorContainer>
    <p className="error">{error}</p>
<div className="flex">
{arrNum.map((value,i)  => (
    <Square 
    isSelected={value ===selectedNum}
    key={i}
    onClick={()=>selectorHandler(value)}
    >
        {value}
    </Square>
)
)
}
</div>
<p>Select Number</p>
</SelectorContainer>
)
}

export default Selector;

const SelectorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:end;
.error{
    color:red;
}
.flex{
    display:flex;
    gap:24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
`

const Square = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight:700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props)=>(!props.isSelected ? "black" : "white")};
`;
