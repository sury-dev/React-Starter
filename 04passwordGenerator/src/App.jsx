import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+";
    for(let i=1; i<=length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass);
  },[length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-lg rounded-lg px-10 py-5 my-16 bg-black'>
        <h1 className='text-4xl text-center m-4 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          placeholder="Passowrd"
          readOnly
          className='outline-none w-full py-1 px-3 bg-white'
          ref={passwordRef}
          />
          <button className='px-2 py-auto outline-none bg-green-600 text-white'
          onClick={copyPasswordToClipboard}>COPY</button>
        </div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 items-center justify-around text-white'>
          <input
          type="range"
          name="length"
          id="passwordLength"
          min={4}
          max={24}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{color : "black"}}/>
          <label htmlFor="name">Length : {length}</label>

          <input
          type="checkbox"
          name="numbers"
          id="numbersAllowed"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numbersAllowed"> Numbers </label>

          <input
          type="checkbox"
          name="characters"
          id="charactersAllowed"
          defaultChecked={characterAllowed}
          onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }} />
          <label htmlFor="charactersAllowed"> Characters </label>
        </div>
      </div>
    </>
  )
}

export default App
