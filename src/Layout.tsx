import FlowbiteNav from './components/navbar/FlowbiteNav.tsx'
import Footer from './components/footer/Footer.tsx'
import { Outlet } from 'react-router-dom'
import SectionOne from './components/content/SectionOne.tsx'
    
    function Layout() {
      return (
        <>
        <FlowbiteNav />
        <Outlet />
        <Footer />
        </>
      )
    }
    
    export default Layout