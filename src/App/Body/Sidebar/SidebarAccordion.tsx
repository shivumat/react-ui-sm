import { useNavigate, useParams } from "react-router";
import AccordionList from "../../../Components/AccordionList";
import { AccordionItemProps } from "../../../Components/AccordionList/AccordionList";
import { RouteConfig, routesConfig } from "../config";


const SidebarAcordion = () => {

const { id } = useParams();
const navigate = useNavigate();

const createRouteAccordionMap = (routeItem: RouteConfig): AccordionItemProps => {
  const isHome = routeItem.path === '/';
  return {
    label: routeItem.label,
    onClick: () => navigate(routeItem.path, { replace: true }),
    isOpen: id ? `/${id}`?.startsWith(routeItem.path) && !isHome : isHome,
    items: routeItem.children?.map(createRouteAccordionMap) ?? [],
  };
}

const accordionroutes : AccordionItemProps[] = routesConfig.map(createRouteAccordionMap)

  return <AccordionList items={accordionroutes} />
}

export default SidebarAcordion