import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect( () => {
    categoriasRepository.getAllWithVideos()
        .then((categoriasComVideos) => {
            console.log({categoriasComVideos})
            setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Resolução do cubo mágico 6x6x6, um dos meus melhores tempos nessa que é minha categoria principal."}
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
      }
      
      return (
        <Carousel
          key={categoria.id}
          category={categoria}
        />  
      );
    })}  

    </PageDefault>
  );
}

export default Home;
