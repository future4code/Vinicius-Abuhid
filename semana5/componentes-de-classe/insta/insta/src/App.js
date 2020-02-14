import React from 'react';
import './App.css';
import Post from './Post/Post';

function App() {
  return (
    <div>
    <Post autordopost={"Johnny"} imgautor={"https://external-preview.redd.it/R8u9Pqwc-Wy-N8pmO6-XSfJZhFjdWarWkTdFmgN5Lew.png?auto=webp&s=2462de9a22c26568e1a469f2477d9e1c5097aab1"} 
    imagempost={"https://upload.wikimedia.org/wikipedia/commons/4/48/Pequena_montanha_de_pedra.jpg"}/>
    <Post autordopost={"Dexter"} imgautor={"https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png"}
    imagempost={"https://www.goodfreephotos.com/albums/united-states/wyoming/other-wyoming/island-lake-with-mountains-and-lake-in-wyoming.jpg"}/>
    <Post autordopost={"Arnold"} imgautor={"https://pbs.twimg.com/profile_images/655792612499173377/yjhN6Yww.png"}
    imagempost={"https://www.publicdomainpictures.net/pictures/150000/nahled/desert-rock-mountain.jpg"}/>
    </div>
  );
}

export default App;
