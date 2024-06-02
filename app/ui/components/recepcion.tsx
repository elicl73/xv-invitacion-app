import Image from 'next/image'

export default function Recepcion() {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="bg-textura overflow-hidden">
        <div className="flex justify-center items-center bg-black w-screen h-screen bg-opacity-10">
          <div className="rounded-tl-[50px] rounded-br-[50px] shadow-[#d79e9e] shadow-lg overflow-hidden">
            <Image
              src="/imgs/inivitacion.jpeg"
              width="450"
              height="500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
