import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import Pikachu from '../CustomUI/Pikachu';

const CheckoutSuccess = ({ history }: RouteComponentProps) => (
    <>
        <Helmet>
            <title>PokéShop - Checkout Success</title>
            <meta
                name="description"
                content={`PokéShop thanks page, your Pokémon will come to your home soon <3 `}
            />
        </Helmet>
        <div style={{ margin: '15vh 10vw' }}>
            <button type="button" onClick={() => history.push(`/`)}>
                &gt; Back to Home &lt;
            </button>
        </div>
        <Pikachu text="You Catch` Them!" />
    </>
);

export default CheckoutSuccess;
