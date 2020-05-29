import React from 'react';
import styled from 'styled-components';
import { Badge } from '../CustomUI/Badges';

const BadgeContainer = styled.a`
    width: 30%;
    font-size: 0.9em;
    white-space: nowrap;
    margin-top: 10px;
`;

const PokeBadges = ({ types }) => (
    <BadgeContainer>
        {types.map((type) => (
            <Badge color={type.type.name}>{type.type.name}</Badge>
        ))}
    </BadgeContainer>
);

export default PokeBadges;
