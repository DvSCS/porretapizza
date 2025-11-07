import { Pizza, Testimonial } from './types';

export const PIZZA_MENU: Pizza[] = [
  {
    name: 'Calabresa Porrêta',
    ingredients: 'Molho de tomate, mussarela, calabresa fatiada, cebola e azeitonas pretas.',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Carne de Sol Arretada',
    ingredients: 'Molho de tomate, mussarela, carne de sol desfiada, queijo coalho e cebola roxa.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Frango Catupiry da Gota',
    ingredients: 'Molho de tomate, mussarela, frango desfiado, catupiry e milho.',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Margherita Clássica',
    ingredients: 'Molho de tomate, mussarela, rodelas de tomate e manjericão fresco.',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Quatro Queijos Danada',
    ingredients: 'Molho de tomate, mussarela, provolone, parmesão e gorgonzola.',
    price: 44.00,
    image: 'https://images.unsplash.com/photo-1598346762295-1f52d5d88667?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Portuguesa Caprichada',
    ingredients: 'Molho de tomate, mussarela, presunto, ovos, cebola, pimentão e azeitonas.',
    price: 40.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop',
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
      quote: "A pizza de carne de sol com queijo coalho é simplesmente PERFEITA! Melhor da cidade, sem dúvidas.",
      author: "Ana Luiza",
      location: "Cliente do Google",
      rating: 5,
    },
    {
      quote: "Pizza deliciosa, atendimento excelente. O local é super agradável. Super recomendo.",
      author: "Edson Lima",
      location: "Cliente do Google",
      rating: 5,
    },
    {
      quote: "O delivery foi super rápido e a pizza chegou quentinha. Qualidade impecável, virei cliente fiel.",
      author: "Carlos Souza",
      location: "Cliente do Google",
      rating: 5,
    },
    {
      quote: "Ambiente familiar e aconchegante. A massa da pizza é fininha e crocante, do jeito que eu gosto. A de calabresa é um clássico imperdível.",
      author: "Juliana Costa",
      location: "Cliente do Google",
      rating: 5,
    }
];