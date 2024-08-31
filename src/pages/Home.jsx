import Notelist from "../components/notelist"


const Home = ({ notes, setnotes }) => {
  return (
    <div>
      <Notelist notes={notes} setnotes={setnotes}/>
    </div>
  )
}

export default Home
