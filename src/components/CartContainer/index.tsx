import { useSelector } from 'react-redux';
import { cartSelector, selectCartTotal } from 'store/ducks/cart';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import CartItem from '../CartItem';
import { EightbitButton } from '../CustomUI/Button';
import { CartItemsContainer } from './styles';

interface CartContainerProps extends RouteComponentProps {
    handleClose: () => void;
}

const CartContainer = ({ match, history, handleClose }: CartContainerProps) => {
    const cart = useSelector(cartSelector);
    const total = useSelector(selectCartTotal).toFixed(2);

    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <CartItemsContainer>
                {cart.length > 0 ? (
                    cart.map((pokemon) => (
                        <CartItem key={pokemon.id} pokemon={pokemon} />
                    ))
                ) : (
                    <p>Your cart is empty =/</p>
                )}
            </CartItemsContainer>
            {cart.length > 0 && (
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <span>Subtotal: R$ {total}</span>
                </div>
            )}
            {cart.length > 0 && (
                <EightbitButton
                    // onClick={() => {history.push(`/${history.location.pathname.split('/')[1]}/shop/checkout`); handleClose();}}
                    onClick={() => {
                        history.push(`${match.url}shop/checkout`);
                        handleClose();
                    }}
                >
                    Go to Checkout!
                </EightbitButton>
            )}
        </div>
    );
};

export default withRouter(CartContainer);
