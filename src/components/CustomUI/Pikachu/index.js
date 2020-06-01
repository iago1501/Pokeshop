import React from 'react';
import './styles.css';

const Pikachu = ({text}) => (
    <>

        <div class="pikachu-wrapper pika-div">
            <h2 className="pika-h2">{text}</h2>

            <div class="pikachu pika-div">
                <div class="head pika-div">
                    <div class="ears left brown pika-div">
                        <div class="ears-inside yellow pika-div"></div>
                    </div>
                    <div class="ears right brown pika-div">
                        <div class="ears-inside yellow pika-div"></div>
                    </div>

                    <div class="face yellow pika-div">
                        <span class="eye left brown pika-span"></span>
                        <span class="eye right brown pika-span"></span>
                        <span class="mouth pika-span">w</span>

                        <span class="cachete left pika-span"></span>
                        <span class="cachete right pika-span"></span>
                    </div>
                </div>

                <div class="body yellow pika-div">
                    <div class="heart pika-div"></div>

                    <div class="paw left yellow pika-div"></div>
                    <div class="paw right yellow pika-div"></div>
                </div>

                <div class="leg left yellow-dark pika-div"></div>
                <div class="leg right yellow-dark pika-div"></div>

                <div class="tail yellow-dark pika-div"></div>
            </div>
        </div>
    </>
);

export default Pikachu;
