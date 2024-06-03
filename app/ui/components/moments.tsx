import Image from 'next/image'

export default function Moments() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-[#FEFAFB]">
      <div className="flex flex-col gap-4 justify-center items-center overflow-hidden">
        <Image
          className="rounded-lg"
          src="/imgs/recepcion.jpeg"
          width="450"
          height="500"
          alt=""
        />
      </div>
    </div>
  )
}
