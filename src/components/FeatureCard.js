import React from 'react';

import './FeatureCard.css';

const FeatureCard = ({ Avatar, title, desc }) => {
    return (
        <div className="featureCard">
            <div>
                {Avatar}
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCard;
