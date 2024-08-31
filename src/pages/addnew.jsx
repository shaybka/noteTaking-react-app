import NoteForm from "../components/NoteForm"


const Addnew = ({notes,setnotes}) => {
    return (
      <div>
        <NoteForm notes={notes} setnotes={setnotes}/>
      </div>
    )
  }
  
  export default Addnew
  