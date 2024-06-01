import { useQuery } from '@tanstack/react-query'
import './App.css'


function App() {

  const result = useQuery({queryKey : ['posts'] , queryFn : async function () {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
  }})

  console.log('reeeeeeeeeeeees here ' , result);
  
  return (
    <>
    {result.isPending ? (<div>LOADIIIIIIIIIIIING</div>) : (
    <ul>
      {result.data.map((lis : any)=> <li key={lis.id}>{lis.title}</li>)}
    </ul>  
    )}
    
    </>
  )
}

export default App
