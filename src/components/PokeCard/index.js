import React from 'react';

import { Badge } from '../CustomUI/Badges';
import { EightbitButton } from '../CustomUI/Button';
import {
    CardContainer,
    PokePrice,
    CardImageContainer,
    CardImage,
    InfoContainer,
    PokeInfo,
    PokeName,
    BadgeContainer,
} from './styles.js';

const PokeCard = () => (
    <CardContainer>
        <PokePrice>50R$</PokePrice>
        <CardImageContainer>
            <CardImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
        </CardImageContainer>
        <InfoContainer>
            <PokeInfo>
                <PokeName>#6 Charizard</PokeName>
                <span>1.7m | 90.5kg</span>
            </PokeInfo>
            <BadgeContainer>
                <Badge color={'rgb(165, 175, 236)'}>Flying</Badge>
                <Badge color={'rgb(230, 29, 29)'}>Fire</Badge>
            </BadgeContainer>
        </InfoContainer>
        <EightbitButton>Add to Cart</EightbitButton>
    </CardContainer>
);

export default PokeCard;
