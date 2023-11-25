import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <CustomButton
      onClick={props.onClick}
      className={props.isOutline ? 'outline_btn' : 'primary_btn'}
    >
      {props.text}
    </CustomButton>
  )
}

export default Button;

const CustomButton = styled.button`

&.primary_btn{
 background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    font-size: 16px;
    min-width: 220px;
    height: 44px;
    align-items: center;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
  }

  &.outline_btn{

    background-color: white;
    color: black;
    border-radius: 5px;
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    font-size: 16px;
    min-width: 220px;
    height: 44px;
    align-items: center;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: black;
        color: white;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
  }

`;
