import { modal } from "./modules/modal";
import { slider } from "./modules/slider";

modal('#header .fancyboxModal', '.header-modal', '.header-modal__close');
modal('#services .fancyboxModal', '.services-modal', '.services-modal__close');

slider('.benefits-inner', 3, '.benefits__arrow--left', '.benefits__arrow--right');
slider('.services-inner', 2, '.services__arrow--left', '.services__arrow--right');