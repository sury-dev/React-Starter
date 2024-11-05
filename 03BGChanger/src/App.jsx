import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState('yellowgreen')

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'yellowgreen'];

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div 
      className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {
            colors.map((color, index) => (
              <button 
              className='outline-none px-4 rounded-3xl py-2'
              style={{backgroundColor: color, color: "white", fontWeight: 500}}
              key={index} onClick={() => setColor(color)}> {color} </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
