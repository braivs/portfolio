import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Portfolio} from "./components/Portfolio/Portfolio"
import {CV} from "./components/CV/CV"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/cv',
    element: <CV />,
  },
  {
    path: '/cv_web3',
    element: <CV pdfFileName="CV_Braivs_Ustiugov_Frontend_React_Next_Web3.pdf" />,
  },
  {
    path: '/iCV',
    element: <CV pdfFileName="CV_Braivs_Ustiugov_Frontend_React_Next.pdf" />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}