import instagramLogo from "../Asset/instagram.png"

const Nav = () => {
  return (
    <>
    <nav>
        <button className="logo">
            <img src={instagramLogo} alt="logo" />
        </button>
        <input type="text" className="search" placeholder="search" />
        <span className="nav-links">
        <button><i className="fas fa-home"></i></button>
        <button><i className="fas fa-comment-alt"></i></button>
        <button><i className="fas fa-compass"></i></button>
        <button><i className="fas fa-heart"></i></button>
        </span>
       
    </nav>
    
    
    </>
  )
}

export default Nav