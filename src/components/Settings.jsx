import React, { useContext } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useSettings } from '../context/SettingsContext';
import { useGame } from '../context/GameContext';
const Settings = () => {

	const data = useSettings();
	const gameData = useGame();
	const {shuffleCardsEasy, shuffleCardsMedium} = gameData;

	const startGame = (level) => {
		if (level === 'easy') {
			shuffleCardsEasy();
		}
		else if (level === 'normal') {
			shuffleCardsMedium();
		}
	}
	return <>
		<Paper className="p-3"  >
			<h3 className="mb-3">Game Settings</h3>
			<FormControl className="w-50 md-w-75 mb-3">
				<InputLabel id="select-level-label">Select Level</InputLabel>
				<Select
					labelId="select-level-label"
					id="select-level"
					label="Select Level"
					value={data.level}
					onChange={(e) => data.setLevel(e.target.value)}
				>
					<MenuItem value="easy">Easy (3x3)</MenuItem>
					<MenuItem value="normal">Normal (4x4)</MenuItem>
					<MenuItem value="hard">Hard (6x6)</MenuItem>
				</Select>
			</FormControl>
			<br />
			<Button
				onClick={() => startGame(data.level)}
				variant="contained" className="my-3 w-50 md-w-75">Start Game</Button>
		</Paper>
	</>
}

export default Settings