import Link from 'next/link'
import Image from 'next/image'
import { PiMapPinAreaFill } from 'react-icons/pi'

import { cinzelDecorative, josefinSlab } from '../fonts'

export default function DondeCuando() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div
        className={`${cinzelDecorative.className} text-[#B29566] flex flex-col justify-center items-center w-screen p-6 bg-texturabeige bg-opacity-10 overflow-hidden`}
      >
        <h2 className="text-4xl pb-6">¿Dónde y cuando?</h2>
        <div className="flex flex-col items-center justify-center w-[95%] py-6 shadow-lg shadow-[#3d3838] bg-white rounded-lg text-[#B29566] sm:w-[50%]">
          <h4 className="text-2xl pb-4">Recepción y Ceremonia</h4>
          <Image src="/imgs/salon.jpg" width="300" height="300" alt="" />
          <h3 className="py-4">Salón Altezz</h3>
          <p
            className={`${josefinSlab.className} text-md text-black pb-4 text-center px-2`}
          >
            <strong>Hora: </strong>
            14:30
            <br />
            <strong>Dirección: </strong>
            María Curie No. 415 Col. San Juan Buenavista, Toluca Edo. de México.
          </p>
          <div className="border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md px-4 py-2 hover:bg-white">
            <Link
              href="https://maps.app.goo.gl/SyEwiJmTZnDiTbKB6?g_st=iw"
              className="flex gap-2"
            >
              <PiMapPinAreaFill size={20} color="black" />
              <span>¿Cómo llegar?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
