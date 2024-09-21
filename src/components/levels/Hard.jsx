import React, { useEffect } from 'react'
import { useGame } from '../../context/GameContext.jsx'
import CoverPng from '../../assets/img/cover.png'

const Hard = () => {
  const gameData = useGame()
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
    shuffleCardsHard,
  } = gameData

  useEffect(() => {
    shuffleCardsHard()
  }, [])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id || card.id === choiceTwo.id) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
      setTurns(turns + 1)
    }
  }, [choiceOne, choiceTwo])

  const handleClick = (card) => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <>
      <div className="card-grid6x6">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div
              className={
                card === choiceOne || card === choiceTwo || card.matched
                  ? 'flipped'
                  : ''
              }
            >
              <img className="front mx-auto" src={card.src} alt="front" />
              <img
                className="back"
                src={CoverPng}
                alt="cover"
                onClick={() => handleClick(card)}
              />
            </div>
          </div>
        ))}
      </div>
      <br />
      turns: {turns}
    </>
  )
}

export default Hard
