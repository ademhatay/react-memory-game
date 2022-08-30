import React, { useEffect } from 'react'

import { useSettings } from '../context/SettingsContext';
import { useGame } from '../context/GameContext';
import Easy from './levels/Easy';
import Medium from './levels/Normal';
import Hard from './levels/Hard';
import VeryHard from './levels/VeryHard';

const Game = () => {


	const data = useSettings();
	const gameData = useGame();
	const { level, imageGroup } = data;
	const { cards, setChoiceOne, setChoiceTwo, setCards, setTurns, characters,
		shuffleCardsEasy, shuffleCardsMedium, shuffleCardsHard, shuffleCardsVeryHard } = gameData;


	const easy = level === 'easy';
	const easyCards =  imageGroup.slice(0, 3);


	const medium = level === 'normal';
	const normalCards = characters.slice(0, 4);

	const hard = level === 'hard';
	const hardCards = characters.slice(0, 5);

	const veryHard = (level === 'veryHard');
	const veryHardCards = characters.slice(0, 6);


	const shuffleCards = () => {

		// shuffle the card level. 3x3, 4x4, 5x5, 6x6
		if (easy) {
			shuffleCardsEasy();
		} else if (medium) {
			shuffleCardsMedium();
		} else if (hard) {

			const shuffleEasyCards = [...hardCards, ...hardCards]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({...card, id: Math.random() }))
			setCards(shuffleEasyCards);
		}

        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(0);
    }

	useEffect(() => {
        shuffleCards();
    }, [])

	return <>
			{
				easy ? <Easy /> : medium ? <Medium /> : hard ? <Hard /> : null
			}
	</>
}

export default Game