import React from 'react'
import { useSettings } from '../context/SettingsContext'

const Footer = () => {
	const data = useSettings();
  return (
	<div className='fixed-bottom'>
		Level - {data.level} | img: {data.imageGroup}
	</div>
  )
}

export default Footer