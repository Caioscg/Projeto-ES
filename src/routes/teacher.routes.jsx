import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/TeacherPages/Home'
import { Class } from '../pages/TeacherPages/Class'
import { Plan } from '../pages/TeacherPages/Plan'

export function TeacherRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<Class />} />
            <Route path="/plan" element={<Plan />} />
        </Routes>
    )
}