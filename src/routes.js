import Person from "@material-ui/icons/Person";
import Extension from "@material-ui/icons/Extension";
import Dashboard from "@material-ui/icons/Dashboard";

import BubbleChart from "@material-ui/icons/BubbleChart";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views for Admin layout
import Icons from "@pages/Icons/Icons.js";
import DashboardPage from "@pages/Dashboard/Dashboard.js";
import UserProfile from "@pages/UserProfile/UserProfile.js";

import Trial from "@pages/Trial";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    name: "ROUTER_TRIAL",
    path: "/trial",
    component: Trial,
    layout: "/admin",
    icon: Extension
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    layout: "/admin"
  }
];

export default dashboardRoutes;
