import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/TeacherPages/Home'

export function TeacherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}