import { mainListItems, secondaryListItems } from "@/app/listItems";
import { List, Divider } from "@mui/material";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment'; 
import { Logout } from "@mui/icons-material";
import {redirect} from 'next/navigation'



export const NavLinks = () => {
    const { data: session } = useSession();

    const redirectToLogin = () =>{
        console.log("clicked")
        redirect("/login")
    }

    return (
        <List component="nav">
            {session && <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>}
            {session && <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Leave Applications" />
            </ListItemButton>}
            {session &&
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Perfomance Tracker" />
                </ListItemButton>}
            {session && <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>}
            {session && <Divider sx={{ my: 1 }} />}
            {session && <ListSubheader component="div" inset>
                Account Info
            </ListSubheader>}
            {session && <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="View Profile" />
            </ListItemButton>}
            {session && <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Company Profile" />
            </ListItemButton>}
            {session && <ListItemButton onClick={()=>signOut()}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
            </ListItemButton>}
            {!session && <ListItemButton onClick={redirectToLogin} >
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Log in" />
            </ListItemButton>}
            {!session && <ListItemButton onClick={()=>redirect("/signup")}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Sign up" />
            </ListItemButton>}
        </List>
    )

}