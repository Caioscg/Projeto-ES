import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/TeacherPages/Home'
import { Class } from '../pages/TeacherPages/Class'

export function TeacherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<Class />} />
        </Routes>
    )
}