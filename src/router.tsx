import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom"
import {Portfolio} from "./components/Portfolio/Portfolio"
import {CV} from "./components/CV/CV"

/*const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/cv',
    element: <CV />,
  },
]*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/cv',
    element: <CV />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}