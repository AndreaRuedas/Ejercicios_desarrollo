import { useState } from 'react'
import Timer from './timer'

function App() {
  const [mostrar, setMostrar] = useState(true)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Ejercicio 2: React timer</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} timer
      </button>
      {mostrar && <Timer />}
    </div>
  )
}

export default App