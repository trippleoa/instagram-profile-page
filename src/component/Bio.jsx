
import profileIcon from "../Asset/profileIcon.svg"
const Bio = () => {
  const editForm=(
    <form action="" className="edit-bio-form">
      <input type="text" id="" placeholder="Your name" />
      <input type="text" id="" placeholder="About you"/>
      <br/>
      <button type="button" className="cancel-button">Cancel</button>
      <button type="button" className="button">Save</button>
    </form>
  )
  return (
    <>
    <section className='bio'>
      <div className="profile-photo" role='button' title='click to edit photo' >
      <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
      <p className="name">Odebode Oluwapelumi.</p>
      <p className="about">I am a frontend developer and UI/UX designer.</p>
      <button>Edit</button>
          {editForm}
      </div>
    </section>
    
    
    
    </>
  )
}

export default Bio