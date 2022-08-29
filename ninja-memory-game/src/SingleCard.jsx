import React from 'react';

const SingleCard = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div>
            <div className="card">
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.src} alt="card front"/>
                    <img className="back" src="/img/cover.png" alt="card back"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleCard;