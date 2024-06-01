import React from 'react';
import { Tadvertises } from '../models/model';
import AdsCard from './adsCard';

function AdsList({adsList} : {adsList : Tadvertises[]}) {
    return (
        <div>
            {adsList?.map(ad=> (
                <AdsCard ads={ad} />
            ))}
        </div>
    );
}

export default AdsList;