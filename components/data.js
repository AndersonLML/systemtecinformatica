import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Alguns dos benefícios de escolher a System Tec Informática",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Assistência Técnica a Domicílio",
      desc: "Não precisa trazer seu aparelho até nós, nossa assistência vai até Você",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Sistema de Automação Nota 10 avaliado pelos clientes",
      desc: "Temos mais de 200 clientes que utilizam nosso sistema pelo Brasil",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Sites Rápidos, Seguros e com um preço que cabe no seu bolso",
      desc: "Nossos sites são feitos com as mais novas tecnologias, prezando melhor desempenho e custo benefício",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Mais alguns benefícios da System Tec Informática",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Atendemos todo tipo de cliente, independente de idade ou equipamento",
      desc: "Temos clientes desde jovens iniciantes a gente da melhor idade, e atendemos a todos com paciência e entendimento",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Suporte Nível A para te antender da melhor forma possível",
      desc: "Nossa equipe de suporte é muito bem avaliada pelos clientes e está sempre disposta a lhes atender com dedicação e comprometimento",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Sites com hospedagem gratuíta",
      desc: "Nossos sites diferente da maioria dos outros, é hospedado sem a necessidade de aluguel de hospedagem, melhorando o custo benefício, sem interferir na performance ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
