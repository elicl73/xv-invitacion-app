'use client'

import { useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { cinzel, cinzelDecorative, montserrat, tangerine } from '../fonts'
import Link from 'next/link'

export default function Confirmacion() {
  const [nombre, setNombre] = useState('')
  const [respuesta, setRespuesta] = useState('')

  const handleLink = () => {
    const noCel = '7224244854'
    if (respuesta === 'Si') {
      return `https://wa.me/${noCel}/?text=Yo+${nombre}+confirmo+mi+asistencia`
    } else if (respuesta === 'No') {
      return `https://wa.me/${noCel}/?text=Yo+${nombre}+lamento+no+poder+asistir+agradezco+la+invitación`
    }
    return '/'
  }

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
                type="text"
                required={true}
                className={`${montserrat.className} text-sm w-full rounded-md mb-4 border border-[#C5C1BC] p-1`}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label>¿Podrás Asistir?</label>
              <div
                className={`${montserrat.className} text-sm flex felx-col gap-3`}
              >
                <span className="flex items-center gap-1">
                  <input
                    onChange={(e) => setRespuesta(e.target.value)}
                    type="radio"
                    value="Si"
                    required={true}
                    name="respuesta"
                  />
                  <label>Si</label>
                </span>
                <span className="flex items-center gap-1">
                  <input
                    onChange={(e) => setRespuesta(e.target.value)}
                    type="radio"
                    value="No"
                    required={true}
                    name="respuesta"
                  />
                  <label>No</label>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`flex items-center justify-center text-lg w-60 h-10 border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md mt-4 hover:bg-white`}
              >
                <Link
                  href={handleLink()}
                  className={`${cinzel.className} flex text-black items-center justify-center gap-2`}
                >
                  <IoLogoWhatsapp size={20} />
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
