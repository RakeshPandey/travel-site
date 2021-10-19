import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import GridPanel from './modules/GridPanel';

let mobileMenu = new MobileMenu;
let gridPanel = new GridPanel;


if (module.hot) {
  module.hot.accept()
}
