import Head from 'next/head';
import type { NextPage } from 'next';
import InsideTopics from '../components/insideTopics';
import BlueButton from '../components/atons/blueButton';
import { useEffect, useState } from 'react';
import { gtmCaller } from '../components/scriptCaller/gtmScript';
import { clarityCaller } from '../components/scriptCaller/clarityScript';
import LogoHead from '../components/headFormats/logoHead';
import dynamic from 'next/dynamic';

const StaticBanner = dynamic(() =>  import('../components/banners/staticBanner'));
const FormsTopics = dynamic(() =>  import('../components/formsTitles'));
const PeopleComents = dynamic(() =>  import('../components/peopleComents'));
const ImageGalerySlider = dynamic(() =>  import('../components/galeries/imageGalerySlider'));
const PeopleSlider = dynamic(() =>  import('../components/PeopleSlider'));
const SimpleFooter = dynamic(() =>  import('../components/footerFormats/simpleFooter'));

const AposentadoriaTempoEspecial: NextPage = () => {
  const [shown, setShown] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 250) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  const linkWhatsAp = 'https://glomb.legist.com.br/aposentadoria'

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
      <meta property="fb:app_id" content="824919729364803" />
      <meta property="og:site_name" content="Glomb Advogados"/>
      <meta property='og:title' content='Você pode se aposentar antes'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Aposentadoria Especial e tempo especial'/>
      <meta property='og:description' content='Quem trabalhou em atividades prejudiciais se aposenta antes e com um valor maior.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/aposentadoriatempoespecial/'/>
      <meta property='og:type' content='website'/>

      <title>Conquiste a melhor Aposentadoria</title>
      <meta name="keywords" content="aposentadoria especial; aposentadoria periculosidade; aposentadoria insalubridade;"></meta>
      <meta name="description" content="Quem trabalhou com periculosidade, insalubridade e atividades prejudiciais à saúde tem direito a se aposentar mais cedo e com valores maiores. Descubra como conquistar a melhor aposentadoria - s/ compromisso."></meta>
    </Head>
    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink=linkWhatsAp
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={linkWhatsAp}
          buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Você pode se aposentar antes"
      subTitle={<>Quem trabalhou em <strong>atividades perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais</strong> pode se aposentar <strong>mais cedo</strong> e com um <strong>valor maior</strong>.</>}
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
      buttonLink={linkWhatsAp}
      headerDesktop='/assets/images/aposentadoria_especial/ap_sp_desk.webp'
      headerDesktopDescription="Aposentada recebeu aposentadoria maior"
      headerMobile='/assets/images/aposentadoria_especial/ap_sp_mobile.webp'
      headerMobileDescription="Aposentada recebeu aposentadoria maior"
    />

    <FormsTopics 
      firstTitle="Sem compromisso" 
      firstSubTitle={<>Avaliamos seu caso totalmente <strong>sem compromisso</strong> e sem que você precise sair de casa.</>}
      secondTitle="46 anos de experiência"
      secondSubTitle={<>Ao longo de nossos <strong>46 anos</strong> de atuação, já atendemos mais de <strong>25 mil</strong> clientes.</>}
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle={<>Nossos <strong>advogados especialistas</strong> entrarão em contato para indicar como <strong>conquistar seus direitos</strong>.</>}
      cleanModel={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Aposente-se antes e com um valor maior'} 
      text={
        <>
          <p>
            Todas as pessoas que trabalharam em atividades <strong>perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais à saúde</strong> tem direito a uma <strong>aposentadoria antecipada</strong> e com <strong>valores maiores</strong>. 
          </p>
        </>} 
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_1.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_1.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
      getCircle={[true, 3]}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Quem tem direito?'} 
      text={
        <>  
          <p>
            Quem trabalhou em contato com qualquer um dos itens abaixo tem vantagens na aposentadoria:
          </p>
        </>
      } 
      listText={[
        "Insalubridade ou Periculosidade",
        "Ruído",
        "Forno (calor em geral)",
        "Câmara Fria (frio em geral)",
        "Eletricidade",
        "Óleo, graxa, gasolina",
        "Combustíveis",
        "Petróleo",
        "Poeira",
        "Solda",
        "Sangue",
        "Radiação",
        "Produtos químicos",
        "Maquinário pesado"
      ]}
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_2.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_2.webp'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Atividades'} 
      text={<p>Quem trabalhou por qualquer período em alguma dessas atividades também têm direito a uma aposentadoria mais vantajosa:</p>} 
      listText={[
        "Hospitais",
        "Laboratórios",
        "Consultórios",
        "Segurança",
        "Indústria metalúrgica",
        "Indústria química",
        "Gráfica",
        "Madeireira",
        "Mineração",
        "Plataforma ou Refinarias"
      ]}
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_3.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_3.webp'} 
      imageDescription={'APensionista recebeu um valor maior de benefício'} 
      cleanMode={true}
    />

    {shown &&
      <>
        <PeopleComents 
          sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
          clientCardsTitle='O que nossos clientes dizem'
          imageUrl={'/assets/images/aposentadoria/grupoPessoasCache.webp'} 
          imageDescription={'Aposentados e pensionistas aumentaram o valor de suas aposentadorias e pensões'}
          cleanLayout={true}
          clientsComentCard={[
            {
              title: 'Excelentes profissionais',
              text:'Excelentes profissionais, muito atenciosos e competentes. Sanaram todas as minhas dúvidas, suprindo as expectativas.',
              starNumber:5,
              clientName:'Marines Gai'
            },
            {
              title: 'Muito bom',
              text:'Muito bom! Plataforma bem fácil, clara e objetiva. O atendimento celular foi cordial e muito profissional. Muito obrigado a todos envolvidos no trabalho.',
              starNumber:5,
              clientName:'William Fabrício de Oliveira'
            },
            {
              title: 'Muito atenciosos',
              text:'Muito atenciosos. Fiquei satisfeita com o atendimento.',
              starNumber:5,
              clientName:'Shirley Ribeiro da Costa'
            },
            {
              title: 'Muito bem atendido',
              text:'Fui muito bem atendido nota 20!',
              starNumber:5,
              clientName:'Dicezar Gomes'
            },
            {
              title: 'Estão de parabéns',
              text:'Essa equipe da Glomb Advogados é ótima. Rapidinho me deu resposta do que eu precisava, estão de parabéns. Muito obrigada.',
              starNumber:5,
              clientName:'Selma Januaria da Silva'
            },
            {
              title: 'Ótimo!',
              text:'Ótimos profissionais, super respeitosos, focados em atender o cliente com excelência.',
              starNumber:5,
              clientName:'Matilde Reami Rodrigues'
            },
            {
              title: 'Extremamante qualificados',
              text:'Renomado escritório de advocacia com profissionais extremamente qualificados e sérios.',
              starNumber:5,
              clientName:'Marcos Aurélio Padilha'
            },
            {
              title: 'Atendimento excelente',
              text:'Ótimo escritório com atendimento excelente. Super indico para quem está procurando um serviço de qualidade.',
              starNumber:5,
              clientName:'Gabriela Fialho'
            }
          ]}
        />
        
        <ImageGalerySlider 
          title={'Transformar vidas por meio da justiça é nosso propósito'} 
          subTitle={['46+ anos de atuação', '25.000+ clientes atendidos']} 
          initialSlideNumber={5}
          cleanCode={true}
          carrouselImages={[
            {
              imageUrl: '/assets/images/escritorio/glomOffice_c.webp',
              imageDescription: 'Corredor do escritório Glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice2_c.webp',
              imageDescription: 'Sala de atendimento aos clientes glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice3_c.webp',
              imageDescription: 'Sala de atendimento aos clientes 2 glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice4_c.webp',
              imageDescription: 'Salas dos advogados especialistas'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice5_c.webp',
              imageDescription: 'Salas dos advogados especialistas'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice6_c.webp',
              imageDescription: 'Recepção escritório glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice7_c.webp',
              imageDescription: 'Recepção escritório glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice8_c.webp',
              imageDescription: 'Recepção escritório glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice9_c.webp',
              imageDescription: 'Recepção escritório glomb advogados'
            },
            {
              imageUrl: '/assets/images/escritorio/glomOffice11_c.webp',
              imageDescription: 'Sala de reuniões glomb advogados'
            }
          ]}
        />
        
        <PeopleSlider 
          title='Nossos profissionais'
          subTitle={<p>Para nós, trabalhar com <strong>justiça</strong> não é apenas um ofício mas uma forma de <strong>transformar o mundo, melhorando</strong> a vida de milhares de pessoas.Por isso, contamos com uma equipe altamente <strong>qualificada</strong>, movida por um forte senso de <strong>propósito, excelência e rigor técnico</strong> para defender seus direitos.</p>}
          carrouselImages={[
            
            {
              imageUrl: '/assets/images/advogados/jose-lucio-glomb-advogado-direito-do-trabalho.webp',
              imageTitle: 'José Lúcio Glomb',
              imageAlt: 'José Lúcio Glomb, advogado, OAB/PR 6.838. Conselheiro Federal da OAB, Ex-presidente do Instituto dos Advogados do Paraná - IAP e Presidente da OAB/PR de 2010 a 2012. Advogado de cabelos brancos, óculos de grau, terno azul e gravata vermelha.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 6.838'
            },
            
            {
              imageUrl: '/assets/images/advogados/angela-glomb-advogada-direito-do-trabalho.webp',
              imageTitle: 'Angela Glomb',
              imageAlt: 'Angela Glomb, advogada, OAB/PR 37.004, OAB/SP 294.679, com vasta experiência em direito do trabalho, pós-graduada pela Pontifícia Universidade Católica de São Paulo - PUC/SP',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 37.004'
            },

            {
              imageUrl: '/assets/images/advogados/daniel-glomb-advogado-direito-do-trabalho-direito-previdenciario.webp',
              imageTitle: 'Daniel Glomb',
              imageAlt: 'Daniel Glomb, advogado, OAB/PR 45.288, OAB/SP 294.685, especialista em deireito do trabalho e da Seguridade Social pela Universidade de São Paulo - USP.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.288'
            },
            
            {
              imageUrl: '/assets/images/advogados/marcia-glomb-advogada.webp',
              imageTitle: 'Márcia Letícia Glomb',
              imageAlt: 'Márcia Glomb, advogada, OAB/PR 86.573, especialista em direito trabalhista e formada em Administração de Empresas pela FAE Business School.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 86.573'
            },
            
            {
              imageUrl: '/assets/images/advogados/andre-durdyn-advogado-trabalhista.webp',
              imageTitle: 'André Durdyn',
              imageAlt: 'André Durdyn, advogado, OAB/PR 41.300, formado em direito pela Pontifícia Universidade Católica - PUC/PR, especialista em direito do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 41.300'
            },
            
            {
              imageUrl: '/assets/images/advogados/francisco-torres-advogado-trabalhista.webp',
              imageTitle: 'Francisco Torres',
              imageAlt: 'Francisco Torres, advogado, OAB/PR 45.155 especialista em direito do trabalho e da seguridade social pela EMATRA/PR.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.155'
            },
            
            {
              imageUrl: '/assets/images/advogados/lucas-emmendorfer-advogado-previdenciarista.webp',
              imageTitle: 'Lucas Emmendorfer',
              imageAlt: 'Lucas Henrique Emmendorfer, OAB/PR 111.802, advogado formado pela Universidade Federal do Paraná, especializado em direito previdenciário e previdência social.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 111.802'
            },
            
            {
              imageUrl: '/assets/images/advogados/rogerio-loch-advogado-previdenciario.webp',
              imageTitle: 'Rogério Loch',
              imageAlt: ' Rogério Loch, OAB/PR 113.316, advogado especialista em direito previdenciário, pós-graduado pela ESMAFE/PR.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 113.316'
            },
            
            {
              imageUrl: '/assets/images/advogados/regiani-aparecida-correia-advogada-previdencia-social.webp',
              imageTitle: 'Regiane Aparecida Correia',
              imageAlt: 'Regiani Aparecida Correia, OAB/PR 89.032, advogada especialista em direito previdenciário.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 89.032'
            },
            
            {
              imageUrl: '/assets/images/advogados/marcelo-mano-alves-advogado-trabalhista.webp',
              imageTitle: 'Marcelo Mano Alves',
              imageAlt: 'Marcelo Mano Alves, OAB/PR 44.200, advogado especialista em direito do trabalho e da Seguridade Social.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 44.200'
            },
            
            {
              imageUrl: '/assets/images/advogados/mauricio-simoes-advogado.webp',
              imageTitle: 'Maurício Simões',
              imageAlt: 'Maurício Simões, OAB/PR 37.008, OAB/SP 230.915-A, especialista em direito e processo do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 37.008'
            },
            
            {
              imageUrl: '/assets/images/advogados/cleide-glomb.webp',
              imageTitle: 'Cleide Glomb',
              imageAlt:'Cleide Glomb, advogada, OAB/PR 26.012, OAB/SP 294.683, especializada em direito previdenciário e processo do trabalho.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 26.012'
            },
            
            {
              imageUrl: '/assets/images/advogados/raphaela-mattana.webp',
              imageTitle: 'Raphaela Mattana',
              imageAlt:'Raphaela Mattana, advogada, OAB/PR 120.190, direito do trabalho.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 120.190'
            },
            
            {
              imageUrl: '/assets/images/advogados/guilherme-seiti.webp',
              imageTitle: 'Guilherme Seiti',
              imageAlt: 'Guilherme Seiti, advogado, OAB/PR 42.351, especialista em direito do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 42.351'
            },
            
            {
              imageUrl: '/assets/images/advogados/paulo-eduardo-muller.webp',
              imageTitle: 'Paulo Eduardo Müller',
              imageAlt: 'Paulo Eduardo Muller, advogado, OAB/PR 59.060, especialista em direito do trabalho e direito previdenciário.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 59.060'
            },
            
            {
              imageUrl: '/assets/images/advogados/jose-paulo-barcellos.webp',
              imageTitle: 'José Paulo Barcellos',
              imageAlt: 'José Paulo Barcellos, advogado, OAB/RJ 47.112.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 47.112'
            },
            
            {
              imageUrl: '/assets/images/advogados/fabiano-araujo.webp',
              imageTitle: 'Fabiano Araújo',
              imageAlt: 'Fabiano Araújo, advogado, OAB/PR 44.240.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 44.240'
            }
          ]}
          buttonLink={linkWhatsAp}
          buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
        />
        
        <SimpleFooter 
          logo='glomb'
          sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
          subTxt='Inscrição OAB nº 403'
        />
        <LogoHead />
      </>
    }
  </>
  )
}

export default AposentadoriaTempoEspecial