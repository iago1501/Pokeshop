import { createGlobalStyle } from 'styled-components';

import PokemonHollow from 'assets/fonts/pokemonhollow.ttf';
import PokemonSolid from 'assets/fonts/pokemonsolid.ttf';
import PressStart2P from 'assets/fonts/pressstart2p.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pokemon Hollow';
        src: local('Pokemon Hollow'),
        url(${PokemonHollow}) format('truetype');
    }

    @font-face {
        font-family: 'Pokemon Solid';
        src: local('Pokemon Solid'),
        url(${PokemonSolid}) format('truetype');
    }

    @font-face {
        font-family: 'Press Start 2P';
        src: local('Press Start 2P'),
        url(${PressStart2P}) format('truetype');
    }

    @keyframes MoveUpDown {
        0%, 100% {
          bottom: 0;
        }
        50% {
          bottom: 5px;
        }
      }
`;

export default GlobalStyle;
