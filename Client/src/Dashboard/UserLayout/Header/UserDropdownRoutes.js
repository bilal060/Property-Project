import React from 'react'
import Hooks from "../../../hooks"
const UserDropdownRoutes = () => {
    const { IsUserLoggedIn, AgentRole } = Hooks();

    const Routes = [
        {
            name: "Profile",
            link: '/dashboard/Profile',
            visiblity: IsUserLoggedIn()
        },
        {
            name: "Add Property",
            link: '/dashboard/AddProperty',
            visiblity: AgentRole()
        }, {
            name: "Payments",
            link: '/dashboard/PaymentMethod',
            visiblity: AgentRole()
        }
        , {
            name: "Change Password",
            link: '/dashboard/ChangePassword',
            visiblity: IsUserLoggedIn()
        }

    ]

    return Routes
}

export default UserDropdownRoutes