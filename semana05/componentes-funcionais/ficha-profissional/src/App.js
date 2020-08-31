import React from 'react';
import './App.css';
import BigCard from './BigCard/BigCard';
import SmallCard from './SmallCard/SmallCard';
import ImageButton from './ImgaeButton/ImageButton';
import PageSection from './PageSection/PageSection';

function App() {
  return (
    <div>
    <PageSection titulozao={"Sobre mim"}>
      <BigCard titulo={"Vinícius Abuhid"} descriçao={"Formado em Direito, mas "
    + " apaixonado por tecnlogia, sou aluno do curso Web Full Stack da Future4, onde aprendemos a programar com um "
    + " grande  time de profissionais"}/>
      <SmallCard titulo={"e-mail"} descriçao={"viniciusabuhid@gmail.com"}/>
      <SmallCard titulo={"Endereço"} descriçao={"Avenida Paulo Camilo Pena, 500"}/>
      <ImageButton texto={"Ver mais"}/>
    </PageSection>
    <PageSection titulozao={"Experiências profissionais"}>
      <BigCard titulo={"Alvarenga & Ribeiro Advocacia"} descriçao={"Experiência profissional como advogado, "
    + " o que me trouxe muita responsabilidae, disciplina e pontualidade"} />
      <BigCard titulo={"Future4"} descriçao={"Startup paulista que acredita no meu potencial e me transforma  "
      + " a cada dia em um desenvolvedor mais preparado"} />
    </PageSection>
    <PageSection titulozao={"Redes sociais"}>
      <ImageButton texto={"Github"}/>
    </PageSection>
    </div>
  );
}

export default App;
