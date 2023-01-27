import { Type as PokemonType } from 'store/ducks/pokemon';
import { Badge } from '../CustomUI/Badges';
import { BadgeContainer } from './styles';

type PokeBadgesProps = {
    types: PokemonType[];
};

const PokeBadges = ({ types }: PokeBadgesProps) => (
    <BadgeContainer>
        {types.map((type) => (
            <Badge key={type.type.name} color={type.type.name}>
                {type.type.name}
            </Badge>
        ))}
    </BadgeContainer>
);

export default PokeBadges;
