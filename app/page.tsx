'use client'

import { useState } from 'react'

import Recepcion from './ui/components/recepcion'
import DondeCuando from './ui/components/donde-cuando'
import Vestimenta from './ui/components/vestimenta'
import Confirmacion from './ui/components/confirmacion'
import Moments from './ui/components/moments'
import PlaySound from './ui/components/play-sound'

export default function Home() {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      {openModal && <PlaySound closeModal={setOpenModal} />}
      <main className="flex flex-col justify-center items-center">
        <Recepcion />
        <DondeCuando />
        <Vestimenta />
        <Moments />
        <Confirmacion />
      </main>
    </>
  )
}
