import AdsList from './adsList';
import useAds from '../hooks/useAds';

function AdsContainer() {
    const {data} = useAds()
    if(data){
        return <AdsList adsList={data} />
    }
    return <h1>Loaaaaaaaaading</h1>
}

export default AdsContainer;