import Hooks from '../../../hooks';
import React from 'react'

const SideBarRoutes = () => {
    const { IsUserLoggedIn, AgentRole, SuperAdmin } = Hooks();

    const Routes = [
        {
            name: "Dashboard",
            link: '/dashboard',
            icon: 'fa fa-map-marker',
            visiblity: AgentRole() || SuperAdmin()
        }
        ,
        {
            name: "Profile",
            link: '/dashboard/Profile',
            icon: 'fa fa-user',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Societies",
            link: '/dashboard/AllSocieties',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Phases",
            link: '/dashboard/Phases',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Blocks",
            link: '/dashboard/Blocks',
            icon: 'fa fa-user',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "My Properties",
            link: '/dashboard/Properties',
            icon: 'fa fa-list',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: " Favorited Properties",
            link: '/dashboard/FavProperties',
            icon: 'fa fa-heart',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: "Add Property",
            link: '/dashboard/AddProperty',
            icon: 'fa fa-list',
            visiblity: AgentRole() || SuperAdmin()
        }, {
            name: "Payments",
            link: '/dashboard/PaymentMethod',
            icon: 'fa fa-credit-card',
            visiblity: AgentRole() || SuperAdmin()
        }
        , {
            name: "Change Password",
            link: '/dashboard/ChangePassword',
            icon: 'fa fa-lock',
            visiblity: IsUserLoggedIn()
        }

    ]

    return Routes
}

export default SideBarRoutes