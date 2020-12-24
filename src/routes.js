import { lazy } from "react";
import Search from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("./Views/HomePage/HomePage")),
    private: false,
  },
  {
    path: "/songs/:singerName",
    name: "Singer",
    exact: false,
    component: lazy(() => import("./Views/SingerPage/SingerPage")),
    private: false,
  },
  {
    path: "/songs",
    name: "Songs",
    exact: false,
    component: lazy(() => import("./Views/SongsPage/SongsPage")),
    private: false,
  },
];

export const navigation = [
  {
    path: "/",
    name: "Top Charts",
    key: 0,
    icon: <FavoriteIcon/>
  },
  {
    path: '/songs',
    name: 'Search songs',
    key: 1,
    icon: <Search/>
  }
]
