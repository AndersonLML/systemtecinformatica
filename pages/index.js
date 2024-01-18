import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import VideoManutencao from "../components/videoManutencao";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import VideoApresentacaoSistema from "../components/videoApresentacaoSistema";

const Home = () => {
  return (
    <>
      <Head>
        <title>System Tec Informática - Assistência Técnica em Informática, Venda de Sistemas de Automação e Criação de Sites</title>
        <meta
          name="description"
          content="System Tec Informática - Assistência Técnica em Informática, Venda de Sistemas de Automação e Criação de Sites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefícios de escolher a System Tec Informática"
        title="Nós focamos primeiramente em resolver os problemas de informática do cliente">
        System Tec Informática é a melhor assistência técnica em Barretos-SP que você precisa para melhorar seus computadores/notebooks, para garantir o funcionamento correto de suas máquinas com garantia e segurança. Caso precise de um Sistema que ajude no gerenciamento do seu estabelecimento temos também a solução e se quer divulgar sua marca na internet, criamos um site com a sua cara que vai agregar muito no seu crescimento no ramo empresarial.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Video de Apresentação"
        title="Sistema Completo - Apenas 49,90">
        Video de Apresentação do Sistema de Automação Comercial
      </SectionTitle>
      <VideoApresentacaoSistema />
      <SectionTitle
        pretitle="Cases de Sucesso"
        title="Aqui estão alguns dos nossos clientes">
        Clientes que utilizam nosso serviço e aprovam
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Algumas perguntas frequentes">
        Aqui estão algumas perguntas frequentes
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;