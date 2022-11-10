// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const coordonateur = {
    id: 'group-dashboard',
    title: 'Coordonateur',
    type: 'group',
    children: [
        {
            id: 'seances',
            title: 'Séances',
            type: 'item',
            url: '/seances',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'presences',
            title: 'Présences',
            type: 'item',
            url: '/presences',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'inscription-validation',
            title: 'Validation de réinscription',
            type: 'item',
            url: '/inscription-validation',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default coordonateur;
