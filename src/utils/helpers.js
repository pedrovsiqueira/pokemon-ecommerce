export const generatePrice = id => {
  const value = id <= 2000 ? id : id / 5;
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const pokemonImageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
