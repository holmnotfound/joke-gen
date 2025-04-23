import {createBroserRouter} from 'react-router-dom'

const router = createBroserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            }
        ]
    }
])