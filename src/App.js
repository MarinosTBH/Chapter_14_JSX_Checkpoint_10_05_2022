import './styles.css';
import vid from './myVideo.mp4'
import pic from './imageInSrc.png'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1 black",maxWidth:'100vw'}}>
        <h1 className="title red">Mohamed Amine Terbah</h1>
        <br/>
        <img src ="/imageInPublic.png"></img>
        <br/>
        <img src={pic}></img>
      </div>
        <video width="320" height="240" controls autoplay muted>
          <source src={vid} type="video/mp4"></source>
        </video>    
      </div>
  );
}

export default App;
