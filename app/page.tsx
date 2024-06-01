import Image from 'next/image'
import {} from '@/public/imgs/inivitacion.jpeg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#FEFAFB]">
          <div className="flex justify-center items-center overflow-hidden">
            <Image
              className="rounded-lg"
              src="/imgs/inivitacion.jpeg"
              width="450"
              height="500"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#FEFAFB]">
          <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
            <Image
              className="rounded-lg"
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
            <div className="border-2 border-[#BAA37D] bg-[#e7dfc0] rounded-md px-4 py-2 hover:bg-white">
              <Link
                href="https://maps.app.goo.gl/SyEwiJmTZnDiTbKB6?g_st=iw"
                className="flex gap-2"
              >
                <Image src="/imgs/pin_icon.svg" width="24" height="24" alt="" />
                <span>¿Cómo llegar?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
