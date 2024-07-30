import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/DirectorPages/Home'
import { CreateClass } from '../pages/DirectorPages/CreateClass'
import { Plans } from '../pages/DirectorPages/Plans'
import { PlanDetails } from '../pages/DirectorPages/PlanDetails'
import { PlanChanges } from '../pages/DirectorPages/PlanChanges'

export function DirectorRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createclass" element={<CreateClass />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:id" element={<PlanDetails />} />
            <Route path="/plans/:id/changes" element={<PlanChanges />} />
        </Routes>
    )
}