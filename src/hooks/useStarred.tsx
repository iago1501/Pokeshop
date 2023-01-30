import { createContext, ReactNode, useContext, useState } from 'react';

type StarredProviderProps = {
    children: ReactNode;
};

type PokemonStarredProps = {
    id: number;
    name: string;
    type: string;
};

type StarredContextData = {
    starred: PokemonStarredProps[];
    updateStarredList: ({ id, name }: PokemonStarredProps) => boolean;
};

const StarredContext = createContext({} as StarredContextData);

export function FavoritesProvider({ children }: StarredProviderProps) {
    const [starred, setStarred] = useState<PokemonStarredProps[]>([]);

    function updateStarredList(pokemon: PokemonStarredProps): boolean {
        const findStarredPokemon = starred.find(
            (starredPokemon) => starredPokemon.id === pokemon.id
        );

        if (findStarredPokemon) {
            const updatedList = starred.filter(
                (starredPokemon) => starredPokemon.id !== pokemon.id
            );

            setStarred([...updatedList]);
            return true;
        }

        if (!findStarredPokemon && starred.length < 6) {
            setStarred([...starred, { ...pokemon }]);
            return true;
        }

        // eslint-disable-next-line no-console
        console.log('You can only carry 6 pokemons with you');
        return false;
    }

    return (
        <StarredContext.Provider value={{ starred, updateStarredList }}>
            {children}
        </StarredContext.Provider>
    );
}

export function useStarred() {
    const context = useContext(StarredContext);

    return context;
}
