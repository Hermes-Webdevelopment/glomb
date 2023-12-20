import Head from 'next/head';
import type { NextPage } from 'next';
import LinksBanner from '../components/banners/linksBanner';
import SimpleFooter from '../components/footerFormats/simpleFooter';
import { useEffect } from 'react';
import { gtmCaller } from '../components/scriptCaller/gtmScript';
import { clarityCaller } from '../components/scriptCaller/clarityScript';

const AposentadoriaTempoEspecial: NextPage = () => {

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

        <title>Obrigado!</title>
        <meta name="keywords" content="auxilio acidente, auxilio acidente inss, auxilio doença acidentario, valor do auxílio doença acidentário, sequela permanente inss, valor do auxílio acidente"></meta>
        <meta name="description" content="Sofreu acidente e tem dificuldade para trabalhar? Receba um valor mensal do INSS."></meta>
        {/* colocar ta canonical */}
      </Head>

      <LinksBanner 
        title='Obrigado!'
        image='/assets/images/agradecimento/ap_rural_banner.webp'
        imageMobile='/assets/images/agradecimento/ap_rural_bannermobile.webp'
        imageAlt='Pessoas felizes agradecendo'
        text={<>Já estamos analisando seu caso.<br/> Em breve nossos especialistas entrarão em contato para indicar como conquistar seus direitos.</>}
        socialMediaArray={[
          {
            icon:'blog',
            name:'Blog',
            link: 'https://blog.glomb.com.br/'
          },
          {
            icon:'site',
            name:'Site',
            link: 'https://glomb.com.br/'
          },
          {
            icon:'instagram',
            name:'Instagram',
            link: 'https://www.instagram.com/glombadvogados/'
          }
        ]}
      />
    
      <SimpleFooter 
        logo='glomb'
        sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
        subTxt='Inscrição OAB nº 403'
      />
      
    </>
  
  )
}

export default AposentadoriaTempoEspecial