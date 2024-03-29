import {
    PokeFontSolid,
    PokeFontHollow,
    PressStart2P,
} from 'components/CustomUI/Fonts';
import GlobalStyle from 'components/CustomUI/Global';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDecorator } from '@storybook/react';

export default { title: 'Fonts' };

addDecorator((s) => (
    <>
        <GlobalStyle />
        {s()}
    </>
));

export const PokemonFont1 = () => (
    <PokeFontSolid color="black">PokeFont Solid</PokeFontSolid>
);
export const PokemonFont2 = () => (
    <PokeFontHollow color="black">PokeFont Hollow</PokeFontHollow>
);

export const BadgeFont1 = () => (
    <PressStart2P color="black">Press Start 2P</PressStart2P>
);
