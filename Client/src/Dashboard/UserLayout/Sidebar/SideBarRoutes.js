import Hooks from '../../../hooks';
import React from 'react'

const SideBarRoutes = () => {
    const { IsUserLoggedIn, AgentRole } = Hooks();

    const Routes = [
        {
            name: "Dashboard",
            link: '/dashboard',
            icon: 'fa fa-map-marker',
            visiblity: AgentRole()
        }
        ,
        {
            name: "Profile",
            link: '/dashboard/Profile',
            icon: 'fa fa-user',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Allsocieties",
            link: '/dashboard/Allsocieties',
            icon: 'fa fa-user',
            visiblity: IsUserLoggedIn()
        }
        , {
            name: "My Properties",
            link: '/dashboard/Properties',
            icon: 'fa fa-list',
            visiblity: AgentRole()
        }, {
            name: " Favorited Properties",
            link: '/dashboard/FavProperties',
            icon: 'fa fa-heart',
            visiblity: AgentRole()
        }, {
            name: "Add Property",
            link: '/dashboard/AddProperty',
            icon: 'fa fa-list',
            visiblity: AgentRole()
        }, {
            name: "Payments",
            link: '/dashboard/PaymentMethod',
            icon: 'fa fa-credit-card',
            visiblity: AgentRole()
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