import styled from 'styled-components';

export const PokeDetailsContainer = styled.div`
    position: relative;
    margin: 15vh 10vw 0px 10vw;
    color: #fff;
    background-color: #212529;
    border-color: white;
    border-style: solid;
    border-width: 4px;
    &:after {
        position: absolute;
        top: -7.2px;
        right: -7.2px;
        bottom: -7.2px;
        left: -7.2px;
        z-index: -1;
        content: '';
        background-color: #212529;
    }
`;

export const PokeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    @media (max-width: 700px) {
        grid-template-columns: 100%;
    }
`;

export const PokeImageContainer = styled.div`
    text-align: center;
    display: flex;
    padding: 10px;
    justify-content: center;
    button {
        background: transparent;
        border: none;
    }
    span {
        cursor: pointer;
        font-size: 30px;
        color: white;
        border: 2px solid #fff;
        padding: 0.5rem;
        width: 30px;
        height: 30px;
        align-self: center;
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`;
export const PokeImage = styled.img`
    width: 150px;
    image-rendering: pixelated;
    cursor: pointer;
    &:hover {
        animation: MoveUpDown 0.5s linear infinite;
        position: relative;
        left: 0;
        bottom: 0;
    }
`;

export const PokeBaseInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
`;

export const PokeNameContainer = styled.div`
    display: flex;

    h3 {
        padding: 0.3rem 0;
    }

    a {
        align-self: start;
        margin: 0px;
        width: auto !important;
    }
`;

export const BaseInfoHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 700px) {
        grid-template-columns: max-content;
    }

    div {
        a {
            width: 100%;
        }
    }

    h3 {
        font-size: 1rem;
    }
    a {
        margin-top: 0px;
        display: inline-flex;
        height: 1rem;
        h3 {
            margin: 0px;
            font-size: 0.6rem;
            width: 50%;
            padding: 0.1rem;
            margin-left: 20px;
            height: auto !important;
        }
    }
`;

export const BaseInfoBody = styled.div`
    display: flex;
    flex-direction: row;
    p {
        width: 100%;
        font-size: 0.8rem;
        @media (max-width: 700px) {
            margin-top: 10px;
        }
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const PokeBaseInfo = styled.div`
    border: 4px solid #fff;
    margin: 50px;
    padding: 10px;
    display: grid;
    grid-template-rows: 50px 20px;
    @media (max-width: 700px) {
        margin: 10px;
        grid-template-rows: 80px;
    }
`;

export const ActionDiv = styled.div`
    margin-left: 5vw;
    & > a {
        margin-top: 10px;
    }
    button {
        margin-top: 3rem;
    }
    @media (max-width: 700px) {
        text-align: center;
        margin: 10px;
    }
`;

type FavoriteProps = {
    starred: string;
};

const starredValues = {
    starred: {
        bgColor: 'yellow',
        scale: 1.15,
    },
    notStarred: {
        bgColor: 'rgba(255, 255, 255, 0.4)',
        scale: 1,
    },
};

export const Favorite = styled.a<FavoriteProps>`
    position: relative;
    align-self: end;
    cursor: pointer;

    svg {
        stroke: black;
        fill: ${({ starred }) =>
            starredValues[starred as keyof typeof starredValues].bgColor};
        scale: ${({ starred }) =>
            starredValues[starred as keyof typeof starredValues].scale};
        transition: fill 0.2s, transform 0.5s;
    }

    svg:hover {
        fill: rgba(255, 255, 255, 0.8);
        transform: scale(1.15) rotate(144deg);
    }
`;
