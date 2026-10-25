import { useState, useEffect } from 'react'

export default function Timer() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    console.log('Timer montado')

    const id = setInterval(() => {
      setSegundos(s => s + 1)
      console.log('tick del timer', id)
    }, 1000)

    // TODO resuelto: retornar la función de cleanup
    return () => {
      clearInterval(id)
      console.log('Timer desmontado: intervalo detenido')
    }
  }, [])

  return <p>Segundos: {segundos}</p>
}