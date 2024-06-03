import React from 'react'
import {
  cinzel,
  cinzelDecorative,
  josefinSlab,
  montserrat,
  tangerine,
} from '../fonts'
import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Confirmacion() {
  return (
    <div className="flex flex-col items-center justify-center bg-superior bg-[#FEFAFB] bg-top bg-repeat-x bg-[length:450px_auto]">
      <div className="w-screen bg-inferior bg-bottom bg-repeat-x bg-[length:450px_auto] overflow-hidden">
        <div
          className={`${cinzelDecorative.className} text-[#B29566] text-2xl flex flex-col items-center justify-center py-6`}
        >
          <h2 className="pb-6">Confirmar Asistencia</h2>
          <form>
            <div
              className={`${tangerine.className} text-black flex flex-col justify-start items-start px-4 w-screen`}
            >
              <label>Nombre</label>
              <input
                className={`${montserrat.className} text-sm w-full rounded-md mb-4 border border-[#C5C1BC] p-1`}
              />
              <label>Apellido</label>
              <input
                className={`${montserrat.className} text-sm w-full rounded-md mb-4 border border-[#C5C1BC] p-1`}
              />
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`flex items-center justify-center text-lg w-60 h-10 border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md mt-4 hover:bg-white`}
              >
                <Link
                  href="https://wa.me/5217222640836/?text=Confirmo+mi+asistencia"
                  className="
                flex items-center justify-center gap-2"
                >
                  <IoLogoWhatsapp size={20} color="black" />
                  <span>Confirmar</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
