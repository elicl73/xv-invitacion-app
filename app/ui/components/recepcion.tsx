import Image from 'next/image'

export default function Recepcion() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-texturapink">
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <div className="rounded-tl-[50px] rounded-br-[50px] shadow-lg shadow-black overflow-hidden">
          <Image src="/imgs/inivitacion.jpeg" width="400" height="350" alt="" />
        </div>
      </div>
    </div>
  )
}
