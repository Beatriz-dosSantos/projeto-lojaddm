import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
  categories: Category[];
  products: Product[];
};

export const data: Data = {
  categories: [
    {
      id: 1,
      title: "Eletro-Eletronicos",
      cover: "https://picsum.photos/id/0/1000/300",
    },
    {
      id: 2,
      title: "Paisagismo",
      cover: "https://picsum.photos/id/10/1000/300",
    },
    {
      id: 3,
      title: "Acessórios",
      cover: "https://picsum.photos/id/21/1000/300",
    },
  ],
  products: [
    {
      id: 1,
      idCategory: 1,
      image: "https://picsum.photos/id/0/200/200",
      title: "Smartphone X1",
      description: "Alta performance, tela AMOLED e câmera avançada.",
      price: 599.99,
    },
    {
      id: 2,
      idCategory: 1,
      image: "https://picsum.photos/id/1/200/200",
      title: "Laptop Pro",
      description: "Design elegante, processador i7, 16GB RAM.",
      price: 1299.99,
    },
    {
      id: 3,
      idCategory: 1,
      image: "https://picsum.photos/id/3/200/200",
      title: "Câmera 4K",
      description: "Gravação ultra HD, qualidade profissional.",
      price: 499.99,
    },
    {
      id: 4,
      idCategory: 2,
      image: "https://picsum.photos/id/10/200/200",
      title: "Praia Tropical",
      description: "Areia branca, águas cristalinas, cenário paradisíaco.",
      price: 49.99,
    },
    {
      id: 5,
      idCategory: 2,
      image: "https://picsum.photos/id/14/200/200",
      title: "Floresta Verde",
      description: "Refúgio natural, ideal para caminhadas e exploração.",
      price: 34.99,
    },
    {
      id: 6,
      idCategory: 2,
      image: "https://picsum.photos/id/17/200/200",
      title: "Cachoeira Majestosa",
      description: "Queda d'água impressionante, espetáculo natural.",
      price: 64.99,
    },
    {
      id: 7,
      idCategory: 3,
      image: "https://picsum.photos/id/21/200/200",
      title: "Bolsa de Couro",
      description: "Design clássico, espaçosa e elegante para uso.",
      price: 89.99,
    },
    {
      id: 8,
      idCategory: 3,
      image: "https://picsum.photos/id/22/200/200",
      title: "Óculos de Sol",
      description: "Proteção UV, design moderno, armação leve.",
      price: 49.99,
    },
    {
      id: 9,
      idCategory: 3,
      image: "https://picsum.photos/id/24/200/200",
      title: "Chapéu Elegante",
      description: "Proteção solar, estilo casual e estiloso.",
      price: 19.99,
    },
    {
      id: 10,
      idCategory: 1,
      image: "https://picsum.photos/id/8/200/200",
      title: "Roteador Wi-Fi",
      description: "Conexão estável, cobertura ampla, múltiplos dispositivos.",
      price: 79.99,
    },
    {
      id: 11,
      idCategory: 1,
      image: "https://picsum.photos/id/5/200/200",
      title: "Tablet 10\"",
      description: "Tela brilhante, ideal para entretenimento e produtividade.",
      price: 299.99,
    },
    {
      id: 12,
      idCategory: 3,
      image: "https://picsum.photos/id/25/200/200",
      title: "Lenço de Seda",
      description: "Toque suave, estampas sofisticadas, elegante.",
      price: 14.99,
    },
    {
      id: 13,
      idCategory: 3,
      image: "https://picsum.photos/id/26/200/200",
      title: "Pulseira de Prata",
      description: "Detalhes delicados, sofisticação e estilo.",
      price: 39.99,
    },
    {
      id: 14,
      idCategory: 2,
      image: "https://picsum.photos/id/11/200/200",
      title: "Montanha Nevada",
      description: "Pico alto, esportes de inverno, beleza natural.",
      price: 59.99,
    },
    {
      id: 15,
      idCategory: 2,
      image: "https://picsum.photos/id/15/200/200",
      title: "Cânion Profundo",
      description: "Formações rochosas impressionantes, vista espetacular.",
      price: 54.99,
    },
  ],
};