import { rest } from 'msw';
import { constants } from 'utils';

export const mockedPokemon = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  id: 1,
  weight: 196,
  height: 2
};

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/1', (req, res, context) => {
    return res(context.delay(500), context.status(200), context.json(mockedPokemon));
  }),
  rest.get(`https://pokeapi.co/api/v2/type/${constants.TYPE}`, (req, res, context) => {
    return res(
      context.delay(500),
      context.status(200),
      context.json({
        pokemon: [
          {
            pokemon: {
              name: 'bulbasaur',
              url: 'https://pokeapi.co/api/v2/pokemon/1/'
            }
          }
        ]
      })
    );
  })
];
