import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";

const dashboardRoutes = [
    {
    path: "/user",
    name: "Account Information",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Route History",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Something Else",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  }
];

export default dashboardRoutes;
