import Image from 'next/image';
import Link from 'next/link'
import fotoDestaque from '../public/fotocapa.png';
import sobreLita from '../public/sobrelita.png';
import aChef from '../public/achef.png';
import MainGrid from '../src/components/MainGrid';
import Carrossel from '../src/components/Carrossel';
import Box from '../src/components/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer';
import BoxMobile from '../src/components/BoxMobile';
import BoxSobre from '../src/components/BoxSobre';
import ButtonStyle from '../src/components/Button/ButtonStyle'

export default function Home() {
  return (

    <MainGrid>
         
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      
        
       <Navbar />

        <div className='fotoDestaque' style={{ fotoDestaque }}>
         <Image src={fotoDestaque} alt="Foto Destaque" unsized='true' />
        </div>

        <BoxMobile>
         <h1 id='sobre' className='title'> Sobre a Litá </h1>
        
          <BoxSobre>
            <div className='sobreLita' style={{ sobreLita }} >
               <BoxSobre>
                <Image src={sobreLita} alt="Sobre a Litá" unsized='true' />
              </BoxSobre>
               <BoxSobre>
                <p align='justify'>
                  A Litá é um amor que veio brotando aos poucos. A mistura da mudança de vida em ir morar sozinha, com a curiosidade de como a comida é feita, foi assim que tudo surgiu.
                  Nos primeiros momentos, a necessidade era o que se fazia presente, mas depois, transformar o que se tinha à mão, começou a ser um desafio. A intuição sempre foi companheira e me fez mudar de ares, no trabalho e na vida.
                  Hoje, o que prezo é a construção de sabores, para que tenhamos mais opções e variedade, sempre... Afinal, comer é aventurar-se.                  <br></br>
                  <br></br>
                  A Litá é composta da Cozinha Quente, dos pratos que acolhem e que te levam à um momento gostoso como um encorpado Raviolli, a panificação fazendo parte deste momento, nutrindo com um básico de "farinha, água e sal" onde podemos ter um acompanhamento ou prato principal sensacionais e ao final uma boa e simples sobremesa, para conduzir o bom e velho cafézinho.
                  </p>
               </BoxSobre>
            </div>
          </BoxSobre>
          </BoxMobile>
       
        <div id='cardapio' className='cardapio' style={{ gridArea: 'cardapio'}} >
          <Box>
            <h1 className='title'> Cardápio </h1>
          </Box>
        </div>
       
        <Box>
          <Carrossel></Carrossel>
        </Box>

        <Box>
          <Link href={{ pathname: '/cardapio'}}> 
          <ButtonStyle className="button">Cardápio Completo</ButtonStyle>
          </Link>
        </Box>

        <BoxMobile>
          <h1 id='achef' className='title'> A Cozinheira </h1>

        <div className='aChef' style={{ gridArea: 'aChef'}} >
          <BoxSobre>
             <p align='justify'>
                Meu nome é Talita Ghiotti, tenho 34 e minha primeira formação foi em Design de Interiores, na verdade poderia dizer que antes disso me formei na construção de trabalho quanto à minha comunicação, passando pelas artes cênicas depois para Design de Interiores, Design Gráfico e então a Gastronomia.
                O caminho até aqui seguiu-se por 10 anos nas profissões anteriores e em 2015 iniciei meus estudos e trajetória paralela com a gastronomia.
                Iniciei de modo autodidata, depois passei a frequentar cursos livres, em alguns momentos no Centro de Qualificação RP. 
                Nesse período, tive a oportunidade de passar pela colaboração e dinamismo de contribuir com os meus conhecimentos, ministrando uma Oficina Gastronômica no Barracão Simioni, participando das Feiras pela cidade de Ribeirão Preto, assim como os Eventos, tais como o Caipora Festival que me moldaram/moldam como uma pessoa melhor, seguindo sempre com a crença de que juntos somos mais fortes. 
                Assim em um momento dentro da Pandemia de Covid-19 no ano de 2020 cheguei até os meus estudos no curso Técnico em Cozinha na ETEC – José Martimiano da Silva.
                Em 2021, termino o primeiro curso dentro dessa carreira que tem muito dinamismo, amor e trabalho árduo.
                Para mim, este curso técnico é o primeiro diploma que carrego sobre a profissão que escolhi depois de uma longa trajetória em outros caminhos, é uma constante de desafios e encantos traçá-lo.
             </p>
          </BoxSobre>

          <BoxSobre>
            <Image src={aChef} alt="A Chef" unsized='true' />
          </BoxSobre>
       </div>
         <Link href={{ pathname: '/cardapio'}}> 
            <ButtonStyle className="button">Veja meus pratos</ButtonStyle>
         </Link>
       </BoxMobile>
      
      <Footer>
      </Footer>

    </MainGrid>
  )
};
