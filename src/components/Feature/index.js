import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza du jour</h1>
      <p>
Sauce alfredo à la truffe garnie de poudre d'or 24 carats</p>
      <FeatureButton>commander</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
