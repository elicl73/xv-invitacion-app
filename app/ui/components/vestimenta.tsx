import { GiLargeDress } from 'react-icons/gi'
import { FaUserTie } from 'react-icons/fa'

import { cinzel, cinzelDecorative } from '../fonts'

export default function Vestimenta() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="bg-texturagray overflow-hidden">
        <div
          className={`${cinzelDecorative.className} text-[#B29566] text-lg text-center flex flex-col justify-center items-center w-screen py-6`}
        >
          <h2 className="pb-6">
            Código de vestimenta Formal
            <br />
            (Por Favor Abstente de Usar Rosa)
          </h2>
          <div className="pb-6">
            <h3 className={`${cinzel.className} text-black`}>
              Mujeres Vestido Largo
            </h3>
            <GiLargeDress size={200} opacity={0.9} />
          </div>
          <div className="pb-6">
            <h3 className={`${cinzel.className} text-black`}>Hombres Traje</h3>
            <FaUserTie size={200} opacity={0.9} />
          </div>
        </div>
      </div>
    </div>
  )
}