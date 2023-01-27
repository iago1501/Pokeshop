import './styles.css';

const PikachuBalloon = ({ text }) => (
    <>
        <div className="pikadiv">
            <p className="pikachu-p"> {text} </p>
            <div className="container pika">
                <div className="pika-head">
                    <div className="pika-head-face">
                        <div className="pika-eye pika-eye-left" />
                        <div className="pika-eye pika-eye-right" />
                        <div className="pika-nose" />
                        <div className="pika-mouth" />
                    </div>
                    <div className="pika-ear pika-ear-left" />
                    <div className="pika-ear pika-ear-right" />
                </div>
                <div className="pika-body">
                    <div className="pika-body-body" />
                    <div className="pika-arm pika-arm-left" />
                    <div className="pika-arm pika-arm-right" />
                    <div className="pika-leg pika-leg-left" />
                    <div className="pika-leg pika-leg-right" />
                    <div className="pika-tail" />
                    <div className="strings">
                        <div className="string" />
                        <div className="string" />
                    </div>
                </div>
                <div className="balloons">
                    <div className="balloon cyan">
                        <div className="string" />
                    </div>
                    <div className="balloon red">
                        <div className="string" />
                    </div>
                    <div className="balloon pink">
                        <div className="string" />
                    </div>
                    <div className="balloon blue">
                        <div className="string" />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default PikachuBalloon;
