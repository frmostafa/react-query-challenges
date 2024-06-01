import { useQuery } from "@tanstack/react-query"

function useAds() {
    const {isPending , data} = useQuery({
        queryKey : ['Ads'],
        queryFn : async function () {
            const res = await fetch('http://127.0.0.1:8000/ads/advertises/?ad_type=sell')
            if(res.ok)
            return res.json()
          }
    })
    return {isPending , data}
}

export default useAds