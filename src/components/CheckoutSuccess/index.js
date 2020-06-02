import React from 'react';
import Pikachu from '../CustomUI/Pikachu';
import { Helmet } from 'react-helmet';

const CheckoutSuccess = ({ history }) => (
    <>
        <Helmet>
            <title>PokéShop - Checkout Success</title>
            <meta
                name="description"
                content={`PokéShop thanks page, your Pokémon will come to your home soon <3 `}
            />
        </Helmet>
        <div style={{ margin: '15vh 10vw' }}>
            <p style={{ cursor: 'pointer' }} onClick={() => history.push(`/`)}>
                &gt; Back to Home &lt;
            </p>
        </div>
        <Pikachu text={'You Catch` Them!'} />
    </>
);

export default CheckoutSuccess;
