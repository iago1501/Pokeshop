import React from 'react';
import './styles.css';

const PikachuBalloon = ({text}) => (
    <>
        <div className="pikadiv">
            <p className="pikachu-p"> {text} </p>
            <div className="container pika">
                <div className="pika-head">
                    <div className="pika-head-face">
                        <div className="pika-eye pika-eye-left"></div>
                        <div className="pika-eye pika-eye-right"></div>
                        <div className="pika-nose"></div>
                        <div className="pika-mouth"></div>
                    </div>
                    <div className="pika-ear pika-ear-left"></div>
                    <div className="pika-ear pika-ear-right"></div>
                </div>
                <div className="pika-body">
                    <div className="pika-body-body"></div>
                    <div className="pika-arm pika-arm-left"></div>
                    <div className="pika-arm pika-arm-right"></div>
                    <div className="pika-leg pika-leg-left"></div>
                    <div className="pika-leg pika-leg-right"></div>
                    <div className="pika-tail"></div>
                    <div className="strings">
                        <div className="string"></div>
                        <div className="string"></div>
                    </div>
                </div>
                <div className="balloons">
                    <div className="balloon cyan">
                        <div className="string"></div>
                    </div>
                    <div className="balloon red">
                        <div className="string"></div>
                    </div>
                    <div className="balloon pink">
                        <div className="string"></div>
                    </div>
                    <div className="balloon blue">
                        <div className="string"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default PikachuBalloon
