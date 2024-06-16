import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/DirectorPages/Home'
import { CreateClass } from '../pages/DirectorPages/CreateClass'

export function DirectorRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createclass" element={<CreateClass />} />
        </Routes>
    )
}