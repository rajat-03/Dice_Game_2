import styled from 'styled-components';

const RollDice = ({ currentDice, rollDice }) => {

  //const [currentDice, setCurrentDice] = useState(1);
  // taking the allstates at oneplace, later update with useContext

  return (
    <DiceContainer>
      <div className='Dice' onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt='diceImage' />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>

  )
}

export default RollDice;

const DiceContainer = styled.div`

margin: 48px;
display: flex;
flex-direction: column;
align-items: center;

.Dice{
  cursor: pointer;
}
`;