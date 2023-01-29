import styled from 'styled-components';

export const Pokeball = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: solid 2px black;
    position: relative;
    animation: MoveUpDown 0.5s linear infinite;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#eeeeee),
        to(#ffffff)
    );
    background: linear-gradient(to bottom, #eeeeee 0%, #ffffff 100%);
    margin: 10px auto;
    -webkit-transition: all 600ms cubic-bezier(0.67, 0.4, 0.36, 0.75);
    transition: all 600ms cubic-bezier(0.67, 0.4, 0.36, 0.75);
    &:before,
    &:after {
        content: '';
        display: block;
        -webkit-transition: all 600ms cubic-bezier(0.67, 0.4, 0.36, 0.75);
        transition: all 600ms cubic-bezier(0.67, 0.4, 0.36, 0.75);
    }
    &:before {
        width: 20px;
        height: 9.5px;
        border-bottom: solid 2px black;
        border-radius: 10px 10px 0 0;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#d10000),
            color-stop(50%, #ff0000)
        );
        background: linear-gradient(to bottom, #d10000 0%, #ff0000 50%);
    }
    &:after {
        content: '';
        width: 2px;
        height: 2px;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#fff),
            to(#ccc)
        );
        background: linear-gradient(to bottom, #fff 0%, #ccc 100%);
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: 0 0 0 1px black, 0 0 0 2px #ddd, 0 0 0 3.5714285714px black,
            0 0 5px 2.9411764706px rgba(0, 0, 0, 0.4);
    }
`;

export const PokeballDiv = styled.div`
    display: inline-flex;
    margin-top: 20px;
`;

const PokeballLoader = () => (
    <PokeballDiv>
        <Pokeball />
        <Pokeball />
        <Pokeball />
    </PokeballDiv>
);

export default PokeballLoader;
