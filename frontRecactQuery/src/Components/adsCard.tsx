import React from 'react';
import { Tadvertises } from '../models/model';

function AdsCard({ads} : {ads: Tadvertises}) {
    return (
        <h1>{ads.title}</h1>
    );
}

export default AdsCard;