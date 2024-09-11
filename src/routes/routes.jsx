import {
  About,
  Contact,
  Kyrgyzstan,
  CentralAsia,
  Main,
  Kazahstan,
  Uzbekistan,
  Turkmenistan,
  Tadjikistan,
} from "../page";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/kyrgyzstan", element: <Kyrgyzstan /> },
  { path: "/central", element: <CentralAsia /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/central/kazahstan", element: <Kazahstan /> },
  { path: "/central/uzbekistan", element: <Uzbekistan /> },
  { path: "/central/tadjikistan", element: <Tadjikistan /> },
  { path: "/central/turkmenistan", element: <Turkmenistan /> },
];

export default routes;
