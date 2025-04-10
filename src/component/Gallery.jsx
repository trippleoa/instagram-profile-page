import pexels1 from "../Asset/pexels1.jpeg"
import pexels2 from "../Asset/pexels2.jpeg"
import pexels3 from "../Asset/pexels3.jpeg"
import pexels4 from "../Asset/pexels4.jpeg"
import pexels5 from "../Asset/pexels5.jpeg"

const Gallery = () => {
  return (
    <>
    <input type="file" name="photo" id="addPhotoInput" />
    <label htmlFor="addPhotoInput">
    <i class="fa-solid fa-square-plus"></i>
    </label>
    <section className="gallery">
    <div className="item">
        <img src={pexels1} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
      <div className="item">
        <img src={pexels2} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
      <div className="item">
        <img src={pexels3} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
      <div className="item">
        <img src={pexels4} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
      <div className="item">
        <img src={pexels5} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
      
    </section>
    </>
  )
}

export default Gallery;

//<i className="add-photo-button fas fa-plus-sqare"></i>