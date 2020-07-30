import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu/>
      <BannerMain
        videoTitle={dadosIniciais.categorias[3].videos[0].titulo}
        url={dadosIniciais.categorias[3].videos[0].url}
        videoDescription={"In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />  
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default Home;
