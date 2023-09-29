import { useState, useEffect } from 'react'
import { embedDashboard } from '@superset-ui/embedded-sdk'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Imxhc3RfbmFtZSI6IlZhcmdhcyIsInVzZXJuYW1lIjoibXZhcmdhcyIsImZpcnN0X25hbWUiOiJNYXJjZWxvIn0sInJlc291cmNlcyI6W3sidHlwZSI6ImRhc2hib2FyZCIsImlkIjoiN2JhYjVjNzUtZTUxYS00NzcxLTkyYWMtNTYwZTdiYjNmMWE2In1dLCJybHNfcnVsZXMiOlt7ImNsYXVzZSI6IlRlbmFudElkPTEwIn1dLCJpYXQiOjE2OTYwMDY1MTIuNTQ2ODE1MiwiZXhwIjoxNjk2MDA2ODEyLjU0NjgxNTIsImF1ZCI6Imh0dHA6Ly8wLjAuMC4wOjgwODAvIiwidHlwZSI6Imd1ZXN0In0.46Rbs8UxCE7BmT2K1RdLlbswAWIGrbC4bLcwZ6jzQO0';

    useEffect(() => {
        embedDashboard({
            id: '7bab5c75-e51a-4771-92ac-560e7bb3f1a6',
            supersetDomain: 'http://ubuntu-s1:8080',
            mountPoint: document.getElementById('my-superset-container'),
                fetchGuestToken: () => token,
            dashboardUiConfig: { }
        });
    })

    return (
        <>
            <h1>Embedded Superset</h1>
            <div id="my-superset-container" style={{ width: "100%;", height: "640px" }}></div>
        </>
    )
}

export default App
