import React, {useEffect} from 'react'
import {useGame} from '../../context/GameContext';
import CoverPng from '../../assets/img/cover.png';

const Easy = () => {

    const gameData = useGame();
    const {
        cards,
        setCards,
        choiceOne,
        choiceTwo,
        setChoiceOne,
        setChoiceTwo,
        setTurns,
        disabled,
        handleChoice,
        setDisabled,
        turns,
        resetTurn,
        shuffleCardsEasy
    } = gameData;





    useEffect(() => {
        shuffleCardsEasy();
    }, [])

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
            setTurns(turns + 1);
        }
    }, [choiceOne, choiceTwo]);

    const handleClick = (card) => {
        if (!disabled) {
            handleChoice(card);
        }


    }


    return <>

        <div className="card-grid3x3">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <div className={card === choiceOne || card === choiceTwo || card.matched  ? "flipped" : ""}>
                        <img className="front mx-auto" src={card.src} alt="front"/>
                        <img className="back" src={CoverPng} alt="cover"
                             onClick={() => handleClick(card)}
                        />
                    </div>
                </div>

            ))}
        </div>
        <br/>
        turns: {turns}
    </>
}

export default Easy