import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import { benefitOne, benefitTwo } from "../../components/data";
import VideoEmissaoNFE from "../../components/videoEmissaoNFE";
import VideoCadastroClientes from "../../components/videoCadastroClientes";
import VideoCadastroProdutos from "../../components/videoCadastroProdutos";
import VideoPerfilFiscal from "../../components/videoPerfilFiscal";
import VideoPromissoria from "../../components/videoPromissoria";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";
import VideoManutencaoProdutos from "../../components/videoManutencaoProdutos";
import VideoSuprimentoCaixa from "../../components/videoSuprimentoCaixa";
import VideoAberturaCaixa from "../../components/videoAberturaCaixa";
import VideoFechamentoCaixa from "../../components/videoFechamentoCaixa";

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
       pretitle="Como utilizar as funções do Sistema"
       title="Como Fazer a Abertura de Caixa">
      </SectionTitle>
      <VideoAberturaCaixa />

      <SectionTitle
       title="Como Fazer um Suprimento de Caixa">
      </SectionTitle>
      <VideoSuprimentoCaixa />

      <SectionTitle
       title="Como Fazer o Fechamento de Caixa">
      </SectionTitle>
      <VideoFechamentoCaixa />

      <SectionTitle
       title="Como Cadastrar o Produto de Forma Completa para poder Emitir NFE e Cupom Fiscal">
      </SectionTitle>
      <VideoCadastroProdutos />

      <SectionTitle
       title="Como alterar o preço dos produtos pela Manutenção dos Produtos">
      </SectionTitle>
      <VideoManutencaoProdutos />

      <SectionTitle
       title="Como Cadastrar o Cliente no Sistema de Forma Simples e Prática">
      </SectionTitle>
      <VideoCadastroClientes />
      
      <SectionTitle
       title="Como configurar o Perfil Fiscal no Sistema com o CFOP de Venda">
      </SectionTitle>
      <VideoPerfilFiscal />

      <SectionTitle
        title="Como Fazer a emissão de uma NFe a partir de uma venda">
      </SectionTitle>
      <VideoEmissaoNFE />

      <SectionTitle
       title="Como fazer uma venda a prazo gerando a promissória da venda">
      </SectionTitle>
      <VideoPromissoria />

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