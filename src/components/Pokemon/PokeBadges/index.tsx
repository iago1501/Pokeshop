import { Type as PokemonType } from 'store/ducks/pokemon';
import { Badge } from '../../CustomUI/Badge';
import { BadgeContainer } from './styles';

type PokeBadgesProps = {
    types: PokemonType[];
};

export const PokeBadges = ({ types }: PokeBadgesProps) => (
    <BadgeContainer>
        {types.map((type) => (
            // TODO: When clicking the button, redirect to search page
            <Badge key={type.type.name} color={type.type.name}>
                {type.type.name}
            </Badge>
        ))}
    </BadgeContainer>
);
