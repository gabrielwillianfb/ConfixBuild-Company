import {
  FaTools,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { user1, user2, user3, user4 } from "./assets";

export const navigations = [
  {
    label: "Início",
    to: "header",
  },
  {
    label: "Serviços",
    to: "services",
  },
  {
    label: "Sobre",
    to: "about",
  },
  {
    label: "Comentários",
    to: "testimonials",
  },
  {
    label: "Contate-nos",
    to: "contact",
  },
];

export const keypoints = [
  {
    title: "Trabalhos manuais especializados",
    description:
      "Cada detalhe importa. Garantimos um trabalho de alta qualidade em cada fase da construção.",
  },
  {
    title: "No Prazo e Dentro do Orçamento",
    description:
      "A eficiência é fundamental. Entregamos seus projetos no prazo, sem custos inesperados.",
  },
  {
    title: "Soluções Inovadoras",
    description:
      "Usamos as tecnologias mais recentes e materiais sustentáveis para construir o futuro.",
  },
  {
    title: "Abordagem Focada no Cliente",
    description: "Ouvimos suas necessidades e personalizamos nossos serviços para superar suas expectativas.",
  },
];

export const whyChooseUs = [
  {
    title: "Qualidade Inigualável",
    icon: FaCheckCircle,
    description: "Mão de obra certa e garantida",
  },
  {
    title: "Entrega Pontual",
    icon: FaClock,
    description: "Projetos concluídos dentro do prazo",
  },
  {
    title: "Designs Inovadores",
    icon: FaDraftingCompass,
    description: "Soluções criativas e modernas",
  },
  {
    title: "Serviço Focado",
    icon: FaUserFriends,
    description: "Priorizando sempre a satisfação do cliente",
  },
];

export const services = [
  {
    title: "Construção Residencial",
    icon: FaHome,
    description: `Construindo casas modernas e de alta qualidade, personalizadas de acordo com a sua visão.`,
  },
  {
    title: "Projetos Comerciais",
    icon: FaBuilding,
    description: `Desenvolvendo espaços comerciais funcionais e inovadores para empresas.`,
  },
  {
    title: "Reformas e Remodelações",
    icon: FaTools,
    description: `Transformando espaços existentes com reforma e design especializados.`,
  },
];

export const testimonials = [
  {
    name: "Amanda Souza",
    image: user1,
    review: `A equipe da Confix superou nossas expectativas. A atenção aos detalhes e o profissionalismo tornaram a reforma da nossa casa um processo tranquilo e agradável.`,
  },
  {
    name: "Thiago Almeida",
    image: user2,
    review: `Do início ao fim, o projeto foi conduzido com incrível habilidade e eficiência. Recomendo fortemente a Confix para qualquer necessidade de construção.`,
  },
  {
    name: "Camila Ribeiro",
    image: user3,
    review: `Trabalhar com a Confix foi uma experiência fantástica. A equipe foi profissional, criativa e comprometida em entregar exatamente o que imaginávamos.`,
  },
  {
    name: "Lucas Ferreira",
    image: user4,
    review: `Serviço excepcional e qualidade de mão de obra! A Confix transformou nosso espaço industrial de maneira eficiente e eficaz. Eles são verdadeiros profissionais.`,
  },
];

export const footer = [
  {
    title: "Empresa",
    routes: [
      {
        name: "Sobre Nós",
        href: "#about",
      },
      {
        name: "Carreiras",
        href: "#",
      },
      {
        name: "Fale Conosco",
        href: "#contact",
      },
    ],
  },
  {
    title: "Serviços",
    routes: [
      {
        name: "Construção Residencial",
        href: "#",
      },
      {
        name: "Projetos Comerciais",
        href: "#",
      },
      {
        name: "Reformas e Remodelações",
        href: "#",
      },
      {
        name: "Gestão de Projetos",
        href: "#",
      },
    ],
  },
  {
    title: "Recursos",
    routes: [
      {
        name: "Estudos de Caso",
        href: "#",
      },
      {
        name: "Perguntas Frequentes",
        href: "#",
      },
      {
        name: "Política de Privacidade",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/gabrielwillianfb/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com",
  },
];
