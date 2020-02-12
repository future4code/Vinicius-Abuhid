import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numerodelikes: 0,
      numerodecomments: 0
    }
  }

  contadorLike = () =>{
    if (this.state.numerodelikes === 0){
    this.setState ({numerodelikes:1})
    }
    else this.setState ({numerodelikes:0})
  }
  contadorComments = () => {
    this.setState ({numerodecomments:+1})
  }
  
  render(){
    return (
    <section>
    <div id="dadosdoautor">
    <img id="fotoperfil"/>
    <h4>{this.props.autordopost}</h4>
    </div>
    <img src={this.props.imagempost} id="post"/>
    <div id="barrainteração">
    <div id="likes">
    <a href="#"><img src="https://img.icons8.com/cotton/2x/like.png" 
    class="icone" id="like" onClick={this.contadorLike}/></a>
    <p id="contadordelike">{this.state.numerodelikes}</p>
    </div>
    <div id="comments">
    <a href="#"><img src="https://pngimage.net/wp-content/uploads/2018/06/speech-bubble-emoji-png-.png"
    class="icone" id="comentarios" onClick={this.contadorComments} /></a>
    <p id="contadordecoments">{this.state.numerodecomments}</p>
    </div>
    </div>
    </section>
  );
  }
}

export default Post;


// "https://upload.wikimedia.org/wikipedia/commons/4/48/Pequena_montanha_de_pedra.jpg"
// https://img.icons8.com/cotton/2x/like.png
// // https://pngimage.net/wp-content/uploads/2018/06/speech-bubble-emoji-png-.png

// {this.state.numerodeclicks} onClick={this.contadorLike}
// 