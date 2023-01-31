import { screen, render } from '@testing-library/react';
import { PokeBadges } from '../components/Pokemon/PokeBadges';

describe('', () => {
    const mockedTypes = [
        {
            type: {
                name: 'fire',
            },
        },
        {
            type: {
                name: 'water',
            },
        },
    ];

    const color = {
        fire: 'rgb(171, 0, 0)',
        water: 'rgb(104, 144, 240)',
    };

    it('should renders correctly', () => {
        render(<PokeBadges types={mockedTypes} />);

        expect(screen.getByText('fire')).toBeInTheDocument();
        expect(screen.getByText('water')).toBeInTheDocument();
    });

    it('should have correctly expected background color', () => {
        render(<PokeBadges types={mockedTypes} />);

        expect(screen.getByText('fire')).toHaveStyle(
            `background-color: ${color.fire}`
        );
        expect(screen.getByText('water')).toHaveStyle(
            `background-color: ${color.water}`
        );
    });
});
