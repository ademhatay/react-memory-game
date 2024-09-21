import { createContext, useContext, useState } from 'react'
import c1 from '../assets/img/characters/character-1.png'
import c2 from '../assets/img/characters/character-2.png'
import c3 from '../assets/img/characters/character-3.png'
import c4 from '../assets/img/characters/character-4.png'
import c5 from '../assets/img/characters/character-5.png'
import c6 from '../assets/img/characters/character-6.png'
import c7 from '../assets/img/characters/character-7.png'
import c8 from '../assets/img/characters/character-8.png'
import c9 from '../assets/img/characters/character-9.png'
import c10 from '../assets/img/characters/character-10.png'
import c11 from '../assets/img/characters/character-11.png'
import c12 from '../assets/img/characters/character-12.png'
import c13 from '../assets/img/characters/character-13.png'
import c14 from '../assets/img/characters/character-14.png'
import c15 from '../assets/img/characters/character-15.png'
import c16 from '../assets/img/characters/character-16.png'

const Context = createContext()

const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const characters = [
    { src: c1 },
    { src: c2 },
    { src: c3 },
    { src: c4 },
    { src: c5 },
    { src: c6 },
    { src: c7 },
    { src: c8 },
    { src: c9 },
    { src: c10 },
    { src: c11 },
    { src: c12 },
    { src: c13 },
    { src: c14 },
    { src: c15 },
    { src: c16 },
  ]

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    if (card.id === choiceOne?.id) {
      setChoiceOne(null)
    }
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisabled(false)
  }

  const n = 2
  const easyCards = characters
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n)

  const shuffleCardsEasy = () => {
    // shuffle the card level. 3x3, 4x4, 5x5, 6x6

    const shuffleEasyCards = [...easyCards, ...easyCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffleEasyCards)
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(0)
  }

  const normal = 8
  const mediumCards = characters
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, normal)

  const shuffleCardsMedium = () => {
    // shuffle the card level. 3x3, 4x4, 5x5, 6x6

    const shuffleCardsMedium = [...mediumCards, ...mediumCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffleCardsMedium)
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(0)
  }

  const shuffleCardsHard = () => {
    const shuffledCardsHard = [...characters, ...characters]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCardsHard)
    setTurns(0)
  }

  const GameData = {
    cards,
    setCards,
    turns,
    setTurns,
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    disabled,
    setDisabled,
    characters,
    handleChoice,
    resetTurn,
    shuffleCardsEasy,
    shuffleCardsMedium,
    shuffleCardsHard,
  }

  return <Context.Provider value={GameData}>{children}</Context.Provider>
}

export const useGame = () => useContext(Context)

export default GameProvider
