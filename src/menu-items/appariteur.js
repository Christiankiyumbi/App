// assets
import { RightOutlined } from '@ant-design/icons';

// icons
const icons = {
    RightOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const appariteur = {
    id: 'group-dashboard',
    title: 'Appariteur',
    type: 'group',
    children: [
        {
            id: 'validation',
            title: "Validation d'inscription",
            type: 'item',
            url: '/validation',
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

export default appariteur;
