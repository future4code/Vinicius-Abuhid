import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numerodelikes: 0,
      numerodecomments: 0,
      barracoments: "",
      imagemlike: "https://img.icons8.com/cotton/2x/like.png"
    }
  }

  contadorLike = () =>{
    if (this.state.numerodelikes === 0){
    this.setState ({numerodelikes:1})
    this.setState ({imagemlike: "https://i.ya-webdesign.com/images/gray-heart-png.png" })
    }
    else this.setState ({numerodelikes:0})
  }
  contadorComments = () => {
    this.setState ({numerodecomments:+1})
    this.setState ({barracoments: <input type="text" placeholder="Deixe aqui seu comentário"/>})
  }
  
  render(){
    return (
    <section>
    <div id="dadosdoautor">
    <img src={this.props.imgautor}id="fotoperfil"/>
    <h4>{this.props.autordopost}</h4>
    </div>
    <img src={this.props.imagempost} id="post"/>
    <div id="barrainteração">
    <div id="likes">
    <a href="#"><img src={this.state.imagemlike} 
    class="icone" id="like" onClick={this.contadorLike} /></a>
    <p id="contadordelike">{this.state.numerodelikes}</p>
    </div>
    <div id="comments">
    <a href="#"><img src="https://pngimage.net/wp-content/uploads/2018/06/speech-bubble-emoji-png-.png"
    class="icone" id="comentarios" onClick={this.contadorComments} /></a>
    <p id="contadordecoments">{this.state.numerodecomments}</p>
    </div>
    </div>
    <div id="divcoments">
    {this.state.barracoments}
    </div>
    </section>
  );
  }
}

export default Post;

