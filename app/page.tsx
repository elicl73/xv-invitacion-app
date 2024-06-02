import Image from 'next/image'
import Link from 'next/link'

import Recepcion from './ui/components/recepcion'
import DondeCuando from './ui/components/donde-cuando'
import Vestimenta from './ui/components/vestimenta'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Recepcion />
      <DondeCuando />
      <Vestimenta />
      <div className="flex flex-col items-center justify-center w-screen bg-[#FEFAFB]">
        <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
          <Image
            className="rounded-lg h-screen"
            src="/imgs/recepcion.jpeg"
            width="450"
            height="500"
            alt=""
          />
          <div className="border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md px-9 py-2 hover:bg-white">
            <Link
              href="https://wa.me/5217222640836/?text=Confirmo+mi+asistencia"
              className="flex gap-2"
            >
              <Image
                src="/imgs/whatsapp_icon.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>Confirmar</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
