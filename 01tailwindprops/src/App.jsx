import './App.css'
import Card from './Components/Card'

function App() {

  const dobject = {
    legs : 4,
    color : "Golden",
    breed : "Retriever",
    age : 2,
    price : 1000
  }

  return (
    <>
      <Card name="Golden retriever puppies" properties = {dobject} btnText="Buy 1"/>
      <Card name="Two puppies" btnText="Buy none"/>
      <Card name="Two puppies"/>
    </>
  )
}

export default App
