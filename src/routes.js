import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";

import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";

// core components/views for Admin layout
import Maps from "@pages/Maps/Maps.js";
import Icons from "@pages/Icons/Icons.js";
import TableList from "@pages/TableList/TableList.js";
import Typography from "@pages/Typography/Typography.js";
import DashboardPage from "@pages/Dashboard/Dashboard.js";
import UserProfile from "@pages/UserProfile/UserProfile.js";

import Users from "@pages/Users";
import NotificationsPage from "@pages/Notifications/Notifications.js";

import UpgradeToPro from "@pages/UpgradeToPro/UpgradeToPro.js";

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
    name: "Uses",
    path: "/users",
    component: Users,
    layout: "/admin",
    icon: SupervisorAccount
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",

    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
