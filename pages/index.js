import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>SystemTec - Assistência Técnica em Informática, Venda de Sistemas de Automação e Criação de Sites</title>
        <meta
          name="description"
          content="SystemTec - Assistência Técnica em Informática, Venda de Sistemas de Automação e Criação de Sites"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefícios de escolher a SystemTec"
        title="Nós focamos primeiramente em resolver os problemas de informática do cliente">
        SystemTec é a solução que Você precisa para melhorar seus computadores/notebooks, para garantir o funcionamento correto de suas máquinas com garantia e segurança. Caso precise de um Sistema que ajude no gerenciamento do seu estabelecimento temos também a solução e se quer divulgar sua marca na internet, criamos um site com a sua cara que vai agregar muito no seu crescimento como empreendedor.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Video de Apresentação"
        title="Aqui está um pouco do nosso trabalho">
        Em breve video de apresentação da empresa
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testemunhos"
        title="Aqui estão alguns dos nossos clientes">
        Testemunho de Clientes que utilizam nosso serviço e aprovam
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Algumas perguntas frequentes">
        Aqui estão algumas perguntas frequentes dos clientes
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;