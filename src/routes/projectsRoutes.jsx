import { Route } from "react-router-dom";
import ProjectDetail from "../pages/home/project/ProjectDetail";
import CardDetails from "../pages/home/project/CardDetails";

const projectsRoutes = (
  <>
    <Route path="credit-card" element={<ProjectDetail />} />
    <Route path="credit-card/:id" element={<CardDetails />} />

    <Route path="demat-account" element={<ProjectDetail />} />
    <Route path="demat-account/:id" element={<CardDetails />} />

    <Route path="savings-account" element={<ProjectDetail />} />
    <Route path="savings-account/:id" element={<CardDetails />} />

    <Route path="instant-loan" element={<ProjectDetail />} />
    <Route path="instant-loan/:id" element={<CardDetails />} />

    <Route path="bnpl" element={<ProjectDetail />} />
    <Route path="bnpl/:id" element={<CardDetails />} />

    <Route path="investment-account" element={<ProjectDetail />} />
    <Route path="investment-account/:id" element={<CardDetails />} />

    <Route path="upi" element={<ProjectDetail />} />
    <Route path="upi/:id" element={<CardDetails />} />

    <Route path="business-account" element={<ProjectDetail />} />
    <Route path="business-account/:id" element={<CardDetails />} />

    <Route path="personal-loan" element={<ProjectDetail />} />
    <Route path="personal-loan/:id" element={<CardDetails />} />

    <Route path="business-loan" element={<ProjectDetail />} />
    <Route path="business-loan/:id" element={<CardDetails />} />
  </>
);

export default projectsRoutes;

