import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const FrontPage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src='/images/dices.png' alt='diceLogo' />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle} isOutline={false} text="Play Now" />
      </div>
    </Container>
  )
}

export default FrontPage

const Container = styled.div`
  max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    h1{
      font-size: 96px;
    font-weight: 700;
    text-transform: uppercase;
    height: 144px;
    white-space: nowrap;
    }
`;

