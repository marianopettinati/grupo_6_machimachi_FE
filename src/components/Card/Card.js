import React from "react";
import * as S from './Card.styles.js';
import PropTypes from 'prop-types';

const Card = ({
    title,
    description
}) => {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
      };

    const renderTitle = () => (
        <S.CardTitle>
          <h2>
            {capitalize(title)}
          </h2>
        </S.CardTitle>
      );
    
    const renderDescription = () => (
        <p>{description}</p>
    );
    
    return (
        <S.Card>
            <S.Title>
              {title && renderTitle()}
            </S.Title>
            <S.Description>
                {description && renderDescription()}
            </S.Description>
        </S.Card>
    )
}

Card.propType = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card;