// assets
import { RightOutlined } from '@ant-design/icons';

// icons
const icons = {
    RightOutlined
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
            icon: icons.RightOutlined,
            breadcrumbs: false
        },
        {
            id: 'presences',
            title: 'Présences',
            type: 'item',
            url: '/presences',
            icon: icons.RightOutlined,
            breadcrumbs: false
        },
        {
            id: 'inscription-validation',
            title: 'Validation de réinscription',
            type: 'item',
            url: '/inscription-validation',
            icon: icons.RightOutlined,
            breadcrumbs: false
        }
    ]
};

export default coordonateur;
