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

      @keyframes blink {
        ${'0%'} {  height: 14px; top: 28px;}
        ${'5%'} {  height: 2px; top: 34px;}
        ${'10%'} {  height: 14px; top: 28px;}
        ${'40%'} {  height: 14px; top: 28px;}
        ${'50%'} {  height: 2px; top: 34px;}
        ${'55%'} {  height: 14px; top: 28px;}
        ${'100%'} {  height: 14px; top: 28px;}
      }

`;

export default GlobalStyle;
