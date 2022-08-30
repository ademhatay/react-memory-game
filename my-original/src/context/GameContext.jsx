import { createContext, useContext, useState } from "react";

const Context = createContext();

const GameProvider = ({ children }) => {

	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [flipped, setFlipped] = useState(false);

	const starwars = [
		{ "src": "img/characters/character-1.png" },
		{ "src": "img/characters/character-2.png" },
		{ "src": "img/characters/character-3.png" },
		{ "src": "img/characters/character-4.png" },
		{ "src": "img/characters/character-5.png" },
		{ "src": "img/characters/character-6.png" },
		{ "src": "img/characters/character-7.png" },
		{ "src": "img/characters/character-8.png" },
		{ "src": "img/characters/character-9.png" },
		{ "src": "img/characters/character-10.png" },
		{ "src": "img/characters/character-11.png" },
		{ "src": "img/characters/character-12.png" },
	]

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
		starwars,
		handleChoice,
		resetTurn,
		flipped
	}

	return (
		<Context.Provider value={GameData}>
			{children}
		</Context.Provider>
	);
}

export const useGame = () => useContext(Context);

export default GameProvider;