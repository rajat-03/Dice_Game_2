import React from 'react'
import styled from 'styled-components'

const TotalScore = (props) => {
    return (
        <ScoreBoard>
            <h1>{props.score}</h1>
            <p>Total Score</p>
        </ScoreBoard>
    )
}

export default TotalScore;

const ScoreBoard = styled.div`

    max-width: 200px;
    text-align: center;

    h1{
    font-size: 80px;
    line-height: 80px;
    }

    p{
    font-size: 24px;
    font-weight: 500;
    }

`;