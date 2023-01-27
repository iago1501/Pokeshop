import styled from 'styled-components';

interface HomeImageDivProps {
    imageUrl: string;
}

export const HomeDiv = styled.div`
    min-width: 30%;
    height: 80vh;
    padding: 0px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 100px 7.5px 15px;
    grid-gap: 20px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;

export const HomeImageDiv = styled.div<HomeImageDivProps>`
    background: url(${(props) => props.imageUrl});
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    @media (max-width: 700px) {
        height: 200px;
    }
`;

export const HomeImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 6px;
`;
