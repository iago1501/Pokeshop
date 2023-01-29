import { Stat as PokemonStat } from 'store/ducks/pokemon';
import { ProgressStatus } from '../../CustomUI/ProgressBar';
import { PressStart2P } from '../../CustomUI/Fonts';
import { PokeStatus, StatusContainer } from './styles';

type PokemonStatusContainerProps = {
    stats: PokemonStat[];
};

const POKE_STATUS = {
    hp: 'red',
    speed: 'orange',
    specialdefense: 'black',
    specialattack: 'green',
    defense: 'blue',
    attack: 'purple',
};

// const POKE_IMAGES = {
//     hp: 'red',
//     speed: 'orange',
//     specialdefense: 'black',
//     specialattack: 'green',
//     defense: 'blue',
//     attack: 'purple',
// };

export const PokeStatusContainer = ({ stats }: PokemonStatusContainerProps) => (
    <StatusContainer>
        {stats.map((status) => (
            <PokeStatus key={status.stat.name}>
                <PressStart2P>
                    {status.stat.name.replace('-', ' ')}:
                </PressStart2P>
                <ProgressStatus
                    statusval={status.base_stat}
                    color={
                        POKE_STATUS[
                            status.stat.name.replace(
                                '-',
                                ''
                            ) as keyof typeof POKE_STATUS
                        ]
                    }
                />
            </PokeStatus>
        ))}
    </StatusContainer>
);
