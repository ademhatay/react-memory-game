import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {

	const [level, setLevel] = useState('easy');
	const [imageGroup, setImageGroup] = useState('characters');

	const settingsData = {
		level,
		setLevel,
		imageGroup,
		setImageGroup
	}

	return (
		<Context.Provider value={settingsData}>
			{children}
		</Context.Provider>
	);
}

export const useSettings = () => useContext(Context);

export default Provider;