import Nav from "./component/Nav";
import Bio from "./component/Bio";
import Gallery from "./component/Gallery";
import "./App.css"
import Practice from "./component/Practice";
function App() {
  return (
    <>
    {/* <Practice/> */}
    <Nav/>
    <div className="container">
    <Bio/>
    <Gallery/>
    </div>
    
    
    
    </>
  );
}

export default App;
