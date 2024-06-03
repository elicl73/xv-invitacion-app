import Image from 'next/image'
import Link from 'next/link'

import Recepcion from './ui/components/recepcion'
import DondeCuando from './ui/components/donde-cuando'
import Vestimenta from './ui/components/vestimenta'
import Confirmacion from './ui/components/confirmacion'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Recepcion />
      <DondeCuando />
      <Vestimenta />
      <Confirmacion />
      <div className="flex flex-col items-center justify-center w-screen bg-[#FEFAFB]">
        <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
          <Image
            className="rounded-lg h-screen"
            src="/imgs/recepcion.jpeg"
            width="450"
            height="500"
            alt=""
          />
        </div>
      </div>
    </main>
  )
}
