// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const administrateur = {
    id: 'group-dashboard',
    title: 'Administrateur',
    type: 'group',
    children: [
        {
            id: 'coordonateurs',
            title: 'Coordonateurs',
            type: 'item',
            url: '/coordonateurs',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'filieres',
            title: 'Filières',
            type: 'item',
            url: '/filieres',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'annees-academiques',
            title: 'Années académiques',
            type: 'item',
            url: '/annees-academiques',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'promotions',
            title: 'Années académiques',
            type: 'item',
            url: '/promotions',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default administrateur;
