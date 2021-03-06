import { toast } from 'react-toastify';

export const generatePrice = id => (id <= 2000 ? id : id / 5);

export const pokemonImageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

export const formatPokemonData = pokemon => {
  const id = pokemon.id ? pokemon.id : Number(pokemon.url.substring(34).slice(0, -1));

  return {
    name: pokemon.name.toUpperCase(),
    url: pokemon.url,
    image: `${pokemonImageUrl}${id}.png`,
    id: id,
    price: generatePrice(id),
    weight: pokemon.weight ? pokemon.weight : '',
    height: pokemon.height ? pokemon.height : ''
  };
};

export const formatPrice = price =>
  price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export const generateCashback = total => formatPrice(total * 0.2);

const toastMessageDefaults = {
  position: 'bottom-left',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export const notifySuccess = message => {
  toast.success(message, { ...toastMessageDefaults });
};

export const notifyError = message => {
  toast.error(message, { ...toastMessageDefaults });
};
