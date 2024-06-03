import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'

import { cinzelDecorative, josefinSlab, tangerine } from '../fonts'

export default function Confirmacion() {
  return (
    <div className="flex flex-col items-center justify-center bg-superior bg-[#FEFAFB] bg-top bg-repeat-x bg-[length:450px_auto]">
      <div className="w-screen bg-inferior bg-bottom bg-repeat-x bg-[length:450px_auto] overflow-hidden">
        <div
          className={`${cinzelDecorative.className} text-[#B29566] text-2xl flex flex-col items-center justify-center py-6`}
        >
          <h2 className="pb-6">Confirmar Asistencia</h2>
          <div className="">
            <form
              className={`${tangerine.className} text-black flex flex-col gap-3 w-screen px-6`}
            >
              <label>Nombre</label>
              <input className="bg-gray-200 rounded-md" />
              <label>Apellido</label>
              <input className="bg-gray-200 rounded-md" />
              <div
                className={`${josefinSlab.className} flex items-center justify-center w-screen`}
              >
                <div className="flex items-center justify-center w-60 gap-2 text-md border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md py-2 hover:bg-white">
                  <Link href="https://wa.me/5217222640836/?text=Confirmo+mi+asistencia">
                    <IoLogoWhatsapp size={20} color="black" />
                    <span className="text-[#B29566]">Confirmar</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
