import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/DirectorPages/Home'

export function DirectorRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}