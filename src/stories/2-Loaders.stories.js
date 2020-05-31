import React from 'react';
import GlobalStyle from 'components/CustomUI/Global';
import { addDecorator } from '@storybook/react';
import { PokeballLoader } from 'components/CustomUI/PokeballLoader';

export default { title: 'Loaders' };

addDecorator((s) => (
    <>
        <GlobalStyle />
        {s()}
    </>
));

export const PokeballLoader = () => (
    <PokeballLoader/>
);
