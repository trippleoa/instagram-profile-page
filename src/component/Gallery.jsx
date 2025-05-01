import { useState } from "react"
//I dowloaded a package from terminal->> npm install get-photo-url.
import getPhotoUrl from 'get-photo-url'


const Gallery = () => {
  const [allPhotos,setAllPhotos]=useState([])
  const addPhoto=async()=>{
       const newPhoto={
        id: Date.now(),
        url: await getPhotoUrl('#addPhotoInput')
          }
          setAllPhotos([newPhoto,...allPhotos])
  }
  return (
    <>
    <input type="file" name="photo" id="addPhotoInput" />
    <label htmlFor="addPhotoInput" onClick={addPhoto}>
    <i class="fa-solid fa-square-plus"></i>
    </label>
    <section className="gallery">
    {
        allPhotos.map(photo=>(
          <div className="item" key={photo.id}>
        <img src={photo.url} className="item-image" alt="" />
        <button className="delete-button">Delete</button>
      </div>
        ))
      }
    {/* <div className="item">
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
      </div> */}
      
    </section>
    </>
  )
}

export default Gallery;

//<i className="add-photo-button fas fa-plus-sqare"></i>