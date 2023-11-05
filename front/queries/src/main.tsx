import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const client = new QueryClient({
    defaultOptions:{
        queries:{
            refetchInterval:50000,
            staleTime:5000
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <App/>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
)