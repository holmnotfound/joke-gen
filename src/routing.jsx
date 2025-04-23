import {createBrowserRouter} from 'react-router-dom'
import RandomInsultPage from './pages/RandomInsultPage/RandomInsultPage'
import AddInsultPage from './pages/AddInsultPage/AddInsultPage'
import InsultPage from './pages/InsultPage/InsultPage'
import Layout from './Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <RandomInsultPage />
            },
            {
                path: '/AddInsultPage',
                element: <AddInsultPage />
            },
            {
                path: '/InsultsPage',
                element: <InsultPage />
            }
        ]
    }
])

export default router