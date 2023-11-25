import { useState, React } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Button from './Button'
import Rules from './Rules'

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNum, setSelectNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState(false)

    const rollDice = () => {

        if (!selectedNum) {
            setError("You have not selected any number");
            return;
        }

        const randomNum = Math.floor(Math.random() * 6) + 1;
        setCurrentDice((prev) => randomNum);

        console.log(selectedNum);
        console.log(randomNum);
        if (selectedNum === randomNum) {
            setScore((prev) => prev + randomNum);
        }
        else {
            setScore((prev) => prev - 2);
        }
        setSelectNum(undefined);
    }

    return (
        <Heading>
            <div className='top_container'>
                <TotalScore score={score} />
                {/* passing useState states as props */}
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNum={selectedNum}
                    setSelectNum={setSelectNum}
                />
            </div>
            <RollDice
                currentDice={currentDice}
                rollDice={rollDice}
            />
            <div className='btn'>
                <Button
                    isOutline={true}
                    onClick={() => setScore(0)}
                    text={"Reset Score"}
                />

                <Button
                    isOutline={false}
                    onClick={() => setShowRules((prev) => !prev)}
                    text={`${showRules ? "Hide" : "Show"} Rules`}
                />
            </div>
            {showRules && <Rules />}
        </Heading>
    )
}

export default GamePlay;

const Heading = styled.div`
padding-top: 50px;
.top_container{
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;