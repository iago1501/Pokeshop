import styled from 'styled-components';

export const PokeDetailsContainer = styled.div`
    position: relative;
    margin: 18vh 10vw 0px 10vw;
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
`;

export const PomeImageContainer = styled.div`
    text-align: center;
    display: flex;
    padding: 10px;
    & > h3 {
        cursor: pointer;
        font-size: 30px;
        border: 2px solid #fff;
        padding: 10px;
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

export const BaseInfoHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    & > h3 {
        font-size: 0.8rem;
    }
    & > a {
        width: 100%;
        margin-top: 0px;
        display: inline-flex;
        height: 10px;
        & > h3 {
            margin: 0px;
            width: 50%;
            padding: 0px;
            margin-left: 20px;
            height: auto !important;
        }
    }
`;

export const BaseInfoBody = styled.div`
    display: flex;
    & > h3 {
        width: 100%;
        font-size: 0.8rem;
    }
`;

export const PokeBaseInfo = styled.div`
    border: 4px solid #fff;
    margin: 50px;
    padding: 10px;
    display: grid;
    grid-template-rows: 50px 20px;
`;

export const ActionDiv = styled.div`
    margin-left: 5vw;
    & > a {
        margin-top: 10px;
    }
`;
