import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import { benefitOne, benefitTwo } from "../../components/data";
import Video from "../../components/video";
import videoCadastroClientes from "../../components/videoCadastroClientes";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";

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
      
      <SectionTitle
        pretitle="Tutoriais de como utilizar melhor nosso Sistema de Automação"
        title="Como Fazer a emissão de uma NFe a partir de uma venda">
      </SectionTitle>
      <Video />
      <SectionTitle
        title="Como cadastrar o cliente no Sistema de forma Simples e prática">
      </SectionTitle>
      <videoCadastroClientes />
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