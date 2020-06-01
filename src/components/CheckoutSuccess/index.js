import React from 'react';
import Pikachu from '../CustomUI/Pikachu'

const CheckoutSuccess = ({history, match}) => (
    <>
    <div style={{ margin: '15vh 10vw' }}>
        <p style={{cursor: 'pointer'}} onClick={() => history.push(`/`)}> &gt; Back to Home &lt;</p>
    </div>
        <Pikachu text={'You Catch` Them!'}/>
    </>
);

export default CheckoutSuccess
