import React from 'react';
import GlobalStyle from 'components/CustomUI/Global';
import { addDecorator } from '@storybook/react';
import { Badge } from 'components/CustomUI/Badges';

export default { title: 'Badges' };

addDecorator((s) => (
    <>
        <GlobalStyle />
        {s()}
    </>
));

export const Badges = () => (
    <div >
        <Badge width='5%' color="fire">Fire</Badge>
        <Badge width='5%' color="water">Water</Badge>
        <Badge width='5%' color="grass">Grass</Badge>
        <Badge width='5%' color="electric">Electric</Badge>
        <Badge width='5%' color="dragon">Dragon</Badge>
        <Badge width='5%' color="poison">Poison</Badge>
        <Badge width='5%' color="dark">Dark</Badge>
        <Badge width='5%' color="ghost">Ghost</Badge>
        <Badge width='5%' color="flying">Flying</Badge>
        <Badge width='5%' color="fighting">Fighting</Badge>
        <Badge width='5%' color="ice">Ice</Badge>
        <Badge width='5%' color="steel">Steel</Badge>
        <Badge width='5%' color="ground">Ground</Badge>
        <Badge width='5%' color="rock">Rock</Badge>
        <Badge width='5%' color="fairy">Fairy</Badge>
        <Badge width='5%' color="bug">Bug</Badge>
        <Badge width='5%' color="psychic">Psychic</Badge>
        <Badge width='5%' color="normal">Normal</Badge>
    </div>
);
