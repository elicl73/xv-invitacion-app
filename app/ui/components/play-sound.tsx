'use client'

import useSound from 'use-sound'
import { MdPlayDisabled, MdPlayArrow } from 'react-icons/md'

import { cinzel } from '../fonts'

interface PlaySoundProps {
  closeModal: (open: boolean) => void
}

const PlaySound: React.FC<PlaySoundProps> = ({ closeModal }) => {
  const [play] = useSound('/sounds/SheIsARainbow.mp3')

  const handlePlay = () => {
    play()
    closeModal(false)
  }

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-60 absolute overflow-hidden">
      <div
        className={`${cinzel.className} flex flex-col items-center gap-8 w-96 h-60 p-6 shadow-xl shadow-black bg-gray-200 rounded-xl`}
      >
        <span>¿Reproducir Audio?</span>
        <div className="flex flex-col justify-start items-start h-full gap-4">
          <button
            onClick={handlePlay}
            className=" bg-indigo-700 h-14 w-52 rounded-md"
          >
            <div className="flex items-center justify-center gap-2">
              <MdPlayArrow size={18} />
              <span>Si</span>
            </div>
          </button>
          <button
            onClick={() => closeModal(false)}
            className="bg-red-700 h-14 w-52 rounded-md"
          >
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

export default PlaySound
