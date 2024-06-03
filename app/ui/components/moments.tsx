import Image from 'next/image'

export default function Moments() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-texturapink">
      <div className="overflow-hidden">
        <Image
          className=""
          src="/imgs/recepcion.jpeg"
          width="400"
          height="450"
          alt=""
        />
      </div>
    </div>
  )
}
