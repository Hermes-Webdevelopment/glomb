import Head from 'next/head';
import type { NextPage } from 'next';
import LinksList from '../components/linksList';
import { useEffect } from 'react';
import { gtmCaller } from '../components/scriptCaller/gtmScript';
import { clarityCaller } from '../components/scriptCaller/clarityScript';

const Links: NextPage = () => {

  useEffect(() => {
    window.addEventListener('load', gtmCaller)
    window.addEventListener('load', clarityCaller)
  },[])
  
return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Hermes TI"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Image shared in web social links */}
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:site_name" content="Glomb Advogados"/>
        <meta property='og:title' content='Sofreu acidente? Receba um valor do INSS'/>
        <meta property="fb:app_id" content="824919729364803" />
        <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="801"/>
        <meta property='og:image:alt' content='Auxílio acidente'/>
        <meta property='og:description' content='Glomb Advogados - Há 46 anos transformando vidas - Direito do Trabalho e Previdenciário.'/>
        <meta property='og:url' content='https://previdenciario.glomb.com.br/auxilioacidentepedido/'/>
        <meta property='og:type' content='website'/>

        <title>Há 46 anos transformando vidas - Direito do Trabalho e Previdenciário.</title>
        <meta name="keywords" content="auxilio acidente, auxilio acidente inss, auxilio doença acidentario, valor do auxílio doença acidentário, sequela permanente inss, valor do auxílio acidente"></meta>
        <meta name="description" content="Glomb Advogados - Há 46 anos transformando vidas - Direito do Trabalho e Previdenciário."></meta>
      </Head>

      <LinksList 
        imageTop='/assets/images/links/imagemTop.webp'
        altImageTop=''
        imageBottom='/assets/images/links/imagemBottom.webp'
        altImageBottom=''
        linkArray={[{
            imageButton:'/assets/images/links/aposentadoria1.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Aposentadoria Especial',
            buttonText:'Avalie seu caso sem compromisso',
            buttonLink:'https://previdenciario.glomb.com.br/aposentadoriatempoespecial/'
          },{
            imageButton:'/assets/images/links/revisao1.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Revisão da Vida Toda',
            buttonText:'Avalie seu caso sem compromisso',
            buttonLink:'https://previdenciario.glomb.com.br/vidatoda/'
          },{
            imageButton:'/assets/images/links/rural1.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Descubra seus direitos',
            buttonText:'Acesse nosso blog',
            buttonLink:'https://blog.glomb.com.br/'
          }
        ]}
        socialMediaArray= {[{
            icon: 'instagram',
            link: 'https://www.instagram.com/glombadvogados/'
          },{
            icon: 'facebook',
            link: 'https://www.facebook.com/glombadvogados'
          },{
            icon: 'youtube',
            link: ''
          }
        ]}
      />
      
    </>
  
  )
}

export default Links