import React, {useEffect, useState} from 'react';
import SingleCard from "./SingleCard.jsx";

const cardImages = [
    {"src": "/img/helmet-1.png"},
    {"src": "/img/sword-1.png"},
    {"src": "/img/shield-1.png"},
    {"src": "/img/scroll-1.png"},
    {"src": "/img/potion-1.png"},
    {"src": "/img/ring-1.png"},
]

const App = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random() }))

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
        if (card.id === choiceOne?.id) {
            setChoiceOne(null);
        }
    }

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards();
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

    return (
        <div className="App">
            <h1>Ninja Memory Game</h1>
            <button onClick={shuffleCards}>Start</button>

            <div className="card-grid">
                {
                    cards.map((card) => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))
                }
            </div>
             {turns ? `played ${turns ? turns : ''} turns` : ''}
        </div>
    );
};

export default App;