import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearType } from 'store/ducks/pokemon';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { HomeDiv, HomeImageContainer, HomeImageDiv } from './styles';
import { POKESHOP_TYPES } from './data';

const PokeShopHome = ({ match, history }: RouteComponentProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearType());
    }, [dispatch]);

    return (
        <>
            <Helmet title="PokéShop - Home" />
            <HomeDiv style={{ marginTop: '100px' }}>
                {POKESHOP_TYPES.map((type) => (
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
        </>
    );
};

export default PokeShopHome;
