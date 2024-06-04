'use client'

import useSound from 'use-sound'
import { MdPlayDisabled, MdPlayArrow } from 'react-icons/md'

import { cinzel } from '../fonts'

export default function PlaySound({ closeModal }) {
  const [play] = useSound('/sounds/SheIsARainbow.mp3')

  const handlePlay = () => {
    play()
    closeModal(false)
  }

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-60 absolute overflow-hidden">
      <div
        className={`${cinzel.className} flex flex-col items-center gap-14 w-96 h-60 p-6 shadow-xl shadow-black bg-gray-200 rounded-xl`}
      >
        <span>¿Reproducir Audio?</span>
        <div className="flex flex-col justify-start items-start h-full">
          <button onClick={handlePlay}>
            <div className="flex items-center justify-center gap-2">
              <MdPlayArrow size={18} />
              <span>Si</span>
            </div>
          </button>
          <button onClick={() => closeModal(false)}>
            <div className="flex items-center justify-center gap-2">
              <MdPlayDisabled size={18} />
              <span>No</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
