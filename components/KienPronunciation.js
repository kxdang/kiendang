import React from 'react'
import { HiOutlineSpeakerWave } from 'react-icons/hi2'
import useSound from 'use-sound'

export const KienPronunciation = () => {
  const [play] = useSound('/static/sound/kien.mp3')
  return (
    <button
      className="ml-1 flex items-center font-bold text-sky-500 dark:text-yellow-500"
      onClick={play}
      alt="pronounciation"
    >
      Kien <HiOutlineSpeakerWave className="ml-1" />
    </button>
  )
}
