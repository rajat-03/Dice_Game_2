import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({ error,setError, selectedNum, setSelectNum }) => {

    const arrNum = [1, 2, 3, 4, 5, 6];
    // const [selectedNum, setSelectNum] = useState();
    // taking the allstates at oneplace, later update with useContext

    const setSelectNumHandler = (value) =>
    {
        setSelectNum(value);
        setError("");
    }
    return (
        <NumberSelected>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrNum.map((value, i) => (
                    <Box
                        key={i}
                        onClick={() =>setSelectNumHandler(value) }
                        isSelectedNumber={value == selectedNum}
                    >
                        {value}
                    </Box>
                ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelected>
    )
}

export default NumberSelector;

const NumberSelected = styled.div`

display: flex;
flex-direction: column;
align-items: end;

    .flex{
        display: flex;
        gap:24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color:red;
    }

`;

const Box = styled.div`

width: 62px;
height: 62px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;

//props, callback method
background-color: ${(props) => (props.isSelectedNumber ? "black" : "white")};
color:  ${(props) => (props.isSelectedNumber ? "white" : "black")};
`;