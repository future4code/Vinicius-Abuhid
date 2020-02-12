import React from 'react';
import './App.css';
import Post from './Post/Post';

function App() {
  return (
    <div>
    <Post autordopost={"Kevin"} imagempost={"https://upload.wikimedia.org/wikipedia/commons/4/48/Pequena_montanha_de_pedra.jpg"}/>
    <Post autordopost={"John"} imagempost={"https://www.goodfreephotos.com/albums/united-states/wyoming/other-wyoming/island-lake-with-mountains-and-lake-in-wyoming.jpg"}/>
    <Post autordopost={"Micheal"} imagempost={"https://www.publicdomainpictures.net/pictures/150000/nahled/desert-rock-mountain.jpg"}/>
    </div>
  );
}

export default App;
