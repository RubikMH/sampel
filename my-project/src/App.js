//import App from './App.css.';
import "./App.css";
import Card from "./Card.js";
import Info from "./Info";


function App() {
  return (
    <div className="App">
      <Card
        src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Free-Download-Shoes-Vans-Wallpaper-HD.jpg"
        style={{ display: "flex",height:400 , paddingTop: "50px",paddingBottom: "50px" , borderRadius: "75px"}}
        size
      />
      <Info/>
    </div>
  );
}

export default App;
