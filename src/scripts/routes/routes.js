import dashboard from "../view/pages/home";
import details from "../view/pages/detail";
import favorito from "../view/pages/favorite";

const routes = {
  "/": dashboard,
  "/home": dashboard,
  "/detail/:id": details,
  "/favorite": favorito,
};

export default routes;
