import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, DashboardPage, WidgetPage, ProductPage, SettingsPage } from '../../pages';

export const DashboardArea = ({ systemsData }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/widgets" element={<WidgetPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};
