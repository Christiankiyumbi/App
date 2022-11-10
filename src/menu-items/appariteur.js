// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
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
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default appariteur;
