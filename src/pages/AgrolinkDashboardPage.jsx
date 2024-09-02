import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import { SideBar } from '../components/navbar/SideBar';
import { agrolinkApi } from '../api/agrolinkApi';
import { useEffect } from 'react';
import { useState } from 'react';

const navArrayLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <InboxIcon />,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Widgets',
        path: '/widgets',
        icon: <GridViewIcon />,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <DraftsIcon />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MenuIcon />,
    },
    {
        title: 'Salir',
        path: '/salir',
        icon: <LogoutIcon />,
    },
];

export const AgrolinkDashboardPage = () => {
    const [systemUserData, setSystemUserData] = useState({});

    useEffect(() => {
        const getSystemData = async () => {
            try {
                setSystemUserData({
                    queryState: 'loading',
                });
                const { data } = await agrolinkApi.get('/sistemas/martinrdrz@hotmail.com');
                setSystemUserData({
                    queryState: 'ready',
                    ...data,
                });
            } catch (error) {
                setSystemUserData({
                    queryState: 'error',
                    msg: error.response?.data?.msg || 'Ocurrió un error',
                });
            }
        };

        getSystemData();
    }, []);

    return (
        <>
            <SideBar navArrayLinks={navArrayLinks} systemUserData={systemUserData} />
        </>
    );
};
