import React from 'react';
import styled from 'styled-components';
import {ProgressStatus} from '../CustomUI/ProgressBar';
import {PressStart2P} from '../CustomUI/Fonts'


export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
    margin: 20px;
    margin-top: 5px;
    justify-content: center;
`;

export const PokeStatus = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px;
    & > h3 {
        font-size: 0.8rem;
        text-align: right;
    }
    & > progress {
        width: 50vw;
        border: 4px solid #fff;
    }
`;

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

const PokeStatusContainer = ({stats}) => (
    <StatusContainer>
        {stats.map((status) => (
            <PokeStatus key={status.stat.name}>
                <PressStart2P>
                    {status.stat.name.replace('-', ' ')}:
                </PressStart2P>
                <ProgressStatus
                    statusval={status.base_stat}
                    color={POKE_STATUS[status.stat.name.replace('-', '')]}
                />
            </PokeStatus>
        ))}
    </StatusContainer>
);

export default PokeStatusContainer;
