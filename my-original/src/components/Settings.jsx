import React, { useContext } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { useSettings } from '../context/SettingsContext';

const Settings = () => {

	const data = useSettings();
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
					<MenuItem value="hard">Hard (5x5)</MenuItem>
					<MenuItem value="veryHard">Very Hard (6x6)</MenuItem>
				</Select>
			</FormControl>
			<br />
			<FormControl className="w-50 md-w-75">
				<InputLabel id="select-image-group-label">Select Image Group</InputLabel>
				<Select
					labelId="select-image-group-label"
					id="select-image-group"
					label="Select Image Group"
					value={data.imageGroup}
					onChange={(e) => data.setImageGroup(e.target.value)}
				>
					<MenuItem value="starwars">Starwars</MenuItem>
					<MenuItem value="footballClubs">Football Clubs</MenuItem>
					<MenuItem value="foods">Foods</MenuItem>
					<MenuItem value="software">Software</MenuItem>
				</Select>
			</FormControl>
			<br />
			<Button variant="contained" className="my-3 w-50 md-w-75">Start Game</Button>
		</Paper>
	</>
}

export default Settings