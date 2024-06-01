import { useQuery } from '@tanstack/react-query';
import React from 'react';

function PostList() {
    const result = useQuery({queryKey : ['posts'] , queryFn : async function () {
        const data = await fetch('http://127.0.0.1:8000/ads/advertises/?ad_type=sell')
        return data.json()
      }})
    return (
        <>
             {result.isPending ? (<div>LOADIIIIIIIIIIIING</div>) : (
    <ul>
      {result.data.map((lis : any)=> <li key={lis.id}>{lis.title}
      <h2>{result.fetchStatus}</h2>
      <h2>{result.status}</h2>

      </li>)}
    </ul>  
    )}
        </>
    );
}

export default PostList;