import { useDispatch } from 'react-redux';
import { removePokemon, addPokemon, PokemonCart } from 'store/ducks/cart';
import { PressStart2PParagraph } from '../../../CustomUI/Fonts';
import {
    PokemonCartContainer,
    PokemonCartImage,
    PokemonCartInfos,
    PokemonCartName,
    ButtonContainer,
} from './styles';

type CartItemProps = {
    pokemon: PokemonCart;
};

const CartItem = ({ pokemon }: CartItemProps) => {
    const { name, sprites, quantity, price } = pokemon;
    const total = (quantity * price).toFixed(2);
    const dispatch = useDispatch();

    return (
        <PokemonCartContainer>
            <PokemonCartImage alt={name} src={sprites.front_default} />
            <PokemonCartInfos>
                <PokemonCartName>{name}</PokemonCartName>
                <span>
                    R$ {price} * {quantity} = R$ {total}
                </span>
            </PokemonCartInfos>
            <ButtonContainer>
                <button
                    type="button"
                    onClick={() => dispatch(removePokemon(pokemon))}
                >
                    <PressStart2PParagraph>-</PressStart2PParagraph>
                </button>
                <PressStart2PParagraph>{quantity}</PressStart2PParagraph>
                <button
                    type="button"
                    onClick={() => dispatch(addPokemon(pokemon, price))}
                >
                    <PressStart2PParagraph>+</PressStart2PParagraph>
                </button>
            </ButtonContainer>
        </PokemonCartContainer>
    );
};

export default CartItem;
