import React from 'react';
import Pikachu from 'components/CustomUI/Pikachu';
import PikachuBalloon from 'components/CustomUI/PikachuBalloon';

export default { title: 'Pikachus' };

export const PikachuCheckout = () => (<Pikachu />);

export const PikachuError = () => (<PikachuBalloon />);
