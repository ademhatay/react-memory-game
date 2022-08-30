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
	const { cards, setChoiceOne, setChoiceTwo, setCards, setTurns, starwars } = gameData;



	const easy = level === 'easy';
	const easyCards = starwars.slice(0, 3);


	const medium = level === 'normal';
	const normalCards = starwars.slice(0, 4);
  	
	const hard = level === 'hard';
	const hardCards = starwars.slice(0, 5);

	const veryHard = (level === 'veryHard');
	const veryHardCards = starwars.slice(0, 6);


	const shuffleCards = () => {
		
		// shuffle the card level. 3x3, 4x4, 5x5, 6x6
		if (easy) {
			const shuffleEasyCards = [...easyCards, ...easyCards]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({...card, id: Math.random() }))
			setCards(shuffleEasyCards);
		} else if (medium) {
			
			const shuffleEasyCards = [...normalCards, ...normalCards]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({...card, id: Math.random() }))
			setCards(shuffleEasyCards);
		} else if (hard) {
			
			const shuffleEasyCards = [...hardCards, ...hardCards]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({...card, id: Math.random() }))
			setCards(shuffleEasyCards);
		} else if (veryHard) {
			
			const shuffleEasyCards = [...veryHardCards, ...veryHardCards]
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
				easy ? <Easy /> : medium ? <Medium /> : hard ? <Hard /> : veryHard ? <VeryHard /> : null
			}
	</>
}

export default Game