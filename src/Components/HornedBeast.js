import {useState} from 'react'

export default function HornedBeast({title, imageUrl, description}) {
  const [votes, setVotes] = useState(0)
  const [modalShow, setModalShow] = useState(false);
  // const [theBeast, setTheBeast] = useState({}) //start of stretch goal. 
  // using modal show, and handleModel as props, have it so the selected beast component shows when you click on any of the images. 

  function handleVote () {
    setVotes(votes + 1)
  }

  function imgModal () {
    setModalShow(!modalShow)
    console.log("test")
  }

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <div className="modal" style={{ display: modalShow ? 'flex' : 'none' }}>
        <img src={imageUrl} alt="" onClick={imgModal} />
      </div>
      <img src={imageUrl} alt="" onClick={imgModal}></img>
      <p>{description}</p>
      <p onClick={handleVote}>❤️ {votes}</p>
    </div>
  )
}


const object = {
  one: "one",
  two: "two", 
}

