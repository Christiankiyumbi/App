// assets
import { RightOutlined } from '@ant-design/icons';

// icons
const icons = {
    RightOutlined
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
            icon: icons.RightOutlined,
            breadcrumbs: false
        },
        {
            id: 'filieres',
            title: 'Filières',
            type: 'item',
            url: '/filieres',
            icon: icons.RightOutlined,
            breadcrumbs: false
        },
        {
            id: 'annees-academiques',
            title: 'Années académiques',
            type: 'item',
            url: '/annees-academiques',
            icon: icons.RightOutlined,
            breadcrumbs: false
        },
        {
            id: 'promotions',
            title: 'Années académiques',
            type: 'item',
            url: '/promotions',
            icon: icons.RightOutlined,
            breadcrumbs: false
        }
    ]
};

export default administrateur;
