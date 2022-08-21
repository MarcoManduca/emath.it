import { IMathematiciansCard } from './MathematiciansCard';

const base: IMathematiciansCard = {
  tag: 'mathematicians',
  title: 'Renato Cartesio',
  body: 'Renato Cartesio è stato un filosofo e matematico francese, fra i principali fondatori della matematica e della filosofia moderne. Cartesio estese la concezione razionalistica di una conoscenza ispirata alla precisione e certezza delle scienze matematiche a ogni aspetto del sapere, dando vita a quello che oggi è conosciuto con il nome di razionalismo continentale, una posizione filosofica dominante in Europa tra il XVII e il XVIII secolo.',
  author: 'Marco Manduca',
  time: Date().toString(),
};

export const mockMathematiciansCardProps = {
  base,
};
