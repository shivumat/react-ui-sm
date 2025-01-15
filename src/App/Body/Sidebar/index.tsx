import BurgerSidebar from "./BurgerSideBar"
import NormalSidebar from "./NormalSidebar"

const Sidebar = (props : {isMobile : boolean}) => {
  return props.isMobile ? <BurgerSidebar /> : <NormalSidebar />
  
}

export default Sidebar