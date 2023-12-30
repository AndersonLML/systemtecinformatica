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
import VideoAtualizarProdutoBalanca from "../../components/videoAtualizarProdutoBalanca";
import VideoEntradaDeProdutos from "../../components/videoEntradaDeProdutos";
import VideoOrdemServico from "../../components/videoOrdemDeServico";

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
       pretitle="Aumentando o Controle de Caixa Diário"
       title="Fazendo a Abertura de Caixa">
      </SectionTitle>
      <VideoAberturaCaixa />

      <SectionTitle
       title="Fazendo um Suprimento de Caixa">
      </SectionTitle>
      <VideoSuprimentoCaixa />

      <SectionTitle
       title="Fazendo o Fechamento de Caixa">
      </SectionTitle>
      <VideoFechamentoCaixa />

      <SectionTitle
       pretitle="Fazendo o Controle dos Produtos"
       title="Fazendo Cadastro de Produtos de Forma Completa para poder Emitir NFE e Cupom Fiscal">
      </SectionTitle>
      <VideoCadastroProdutos />

      <SectionTitle
       title="Fazendo atualização de Estoque com a Entrada de Produtos">
      </SectionTitle>
      <VideoEntradaDeProdutos/>

      <SectionTitle
       title="Alterando o preço dos Produtos pela Manutenção dos Produtos">
      </SectionTitle>
      <VideoManutencaoProdutos />

      <SectionTitle
       title="Atualizando os Produtos da Balança direto pelo Sistema">
      </SectionTitle>
      <VideoAtualizarProdutoBalanca />

      <SectionTitle
      pretitle="Aumentando o Controle dos Clientes"
       title="Cadastrando o Cliente no Sistema de Forma Simples e Prática">
      </SectionTitle>
      <VideoCadastroClientes />
      
      <SectionTitle
       title="Fazendo Ordem de Serviço - Completo">
      </SectionTitle>
      <VideoOrdemServico />

      <SectionTitle
       pretitle="Configurações Fiscais e outras Funcionalidades"
       title="Configurando o Perfil Fiscal no Sistema com o CFOP de Venda">
      </SectionTitle>
      <VideoPerfilFiscal />

      <SectionTitle
        title="Fazendo a emissão de uma NFe a partir de uma venda">
      </SectionTitle>
      <VideoEmissaoNFE />

      <SectionTitle
       title="Fazendo uma venda a prazo gerando a promissória da venda">
      </SectionTitle>
      <VideoPromissoria />

      <SectionTitle
        pretitle="Cases de Sucesso"
        title="Aqui estão alguns dos nossos clientes">
        Clientes que utilizam nossos serviços
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