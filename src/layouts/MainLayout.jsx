import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
