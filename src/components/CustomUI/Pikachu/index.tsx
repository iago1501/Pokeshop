import './styles.css';

type PikachuProps = {
    text: string;
};

const Pikachu = ({ text }: PikachuProps) => (
    <>
        <div className="pikachu-wrapper pika-div">
            <h2 className="pika-h2">{text}</h2>

            <div className="pikachu pika-div">
                <div className="head pika-div">
                    <div className="ears left brown pika-div">
                        <div className="ears-inside yellow pika-div" />
                    </div>
                    <div className="ears right brown pika-div">
                        <div className="ears-inside yellow pika-div" />
                    </div>

                    <div className="face yellow pika-div">
                        <span className="eye left brown pika-span" />
                        <span className="eye right brown pika-span" />
                        <span className="mouth pika-span">w</span>

                        <span className="cachete left pika-span" />
                        <span className="cachete right pika-span" />
                    </div>
                </div>

                <div className="body yellow pika-div">
                    <div className="heart pika-div" />

                    <div className="paw left yellow pika-div" />
                    <div className="paw right yellow pika-div" />
                </div>

                <div className="leg left yellow-dark pika-div" />
                <div className="leg right yellow-dark pika-div" />

                <div className="tail yellow-dark pika-div" />
            </div>
        </div>
    </>
);

export default Pikachu;
