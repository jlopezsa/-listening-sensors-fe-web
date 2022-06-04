import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import SetSensorsDashboard from '../pages/SetSensorsDasboard';
import HomePageSectionOjective from '../components/molecules/InformationBigCard';
import HomePageSectionTech from '../components/molecules/InformationBigCardArchitecture';

import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_SINGLE_DASHBOARD,
  ROUTE_SECTION_OBJECTIVE,
  ROUTE_SECTION_TECH,
} from './routes';

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_SIGNUP} element={<SignupPage />} />
      <Route path={ROUTE_SINGLE_DASHBOARD} element={<SetSensorsDashboard />} />
      <Route path={ROUTE_SECTION_OBJECTIVE} element={<HomePageSectionOjective />} />
      <Route path={ROUTE_SECTION_TECH} element={<HomePageSectionTech />} />
    </Routes>
  );
}

export default MainRouter;
