import React from 'react'
import { useSettings } from '../context/SettingsContext'

const Footer = () => {
  const data = useSettings()

  return (
    <>
      <div
        className={`${data.level === 'easy' ? 'bg-success' : data.level === 'hard' ? 'bg-danger' : 'bg-warning'} fixed-bottom`}
      >
        Level - {data.level}
      </div>
      <div className="my-3 mb-5">
        this project created by{' '}
        <a target="_blank" href="https://ademhatay.com">
          ademhatay
        </a>
      </div>
    </>
  )
}

export default Footer
