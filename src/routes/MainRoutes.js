import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

// render - Gerer les pages
const GererAnneeAcademique = Loadable(lazy(() => import('pages/components-overview/GererAnneeAcademique')));
const GererEtudiant = Loadable(lazy(() => import('pages/components-overview/GererEtudiant')));
const GererFiliere = Loadable(lazy(() => import('pages/components-overview/GererFiliere')));
const GererPresence = Loadable(lazy(() => import('pages/components-overview/GererPresence')));
const GererPromotion = Loadable(lazy(() => import('pages/components-overview/GererPromotion')));
const GererSeance = Loadable(lazy(() => import('pages/components-overview/GererSeance')));
const TauxDeParticipation = Loadable(lazy(() => import('pages/components-overview/TauxDeParticipation')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'annees-academiques',
            element: <GererAnneeAcademique />
        },
        {
            path: 'etudiants',
            element: <GererEtudiant />
        },
        {
            path: 'filieres',
            element: <GererFiliere />
        },
        {
            path: 'presences',
            element: <GererPresence />
        },
        {
            path: 'promotions',
            element: <GererPromotion />
        },
        {
            path: 'seances',
            element: <GererSeance />
        }
    ]
};

export default MainRoutes;
