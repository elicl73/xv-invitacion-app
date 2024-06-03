import Recepcion from './ui/components/recepcion'
import DondeCuando from './ui/components/donde-cuando'
import Vestimenta from './ui/components/vestimenta'
import Confirmacion from './ui/components/confirmacion'
import Moments from './ui/components/moments'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Recepcion />
      <DondeCuando />
      <Vestimenta />
      <Moments />
      <Confirmacion />
    </main>
  )
}
