import React, { useEffect } from 'react';
import { POKESHOP_TYPES } from './data';
import { useDispatch } from 'react-redux';
import { clearType } from 'store/ducks/pokemon';

import styled from 'styled-components';

const HomeDiv = styled.div`
    min-width: 30%;
    height: 80vh;
    padding: 0px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 0 7.5px 15px;
    grid-gap: 20px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;

const HomeImageDiv = styled.div`
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

const HomeImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 6px;
`;

const PokeShopHome = ({ match, history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearType());
    }, [dispatch]);

    return (
        <HomeDiv style={{ marginTop: '100px' }}>
            {POKESHOP_TYPES.types.map((type) => (
                <HomeImageContainer>
                    <HomeImageDiv
                        imageUrl={type.imageUrl}
                        onClick={() =>
                            history.push(`${match.url}${type.linkUrl}`)
                        }
                    />
                </HomeImageContainer>
            ))}
        </HomeDiv>
    );
};

export default PokeShopHome;
