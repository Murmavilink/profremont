import { modal } from "./modules/modal";
import { slider } from "./modules/slider";
import { timer } from "./modules/timer";
import { validate } from "./modules/validate";
import { sendForm } from "./modules/sendForm";

modal('#header .fancyboxModal', '.header-modal', '.header-modal__close');
modal('#services .fancyboxModal', '.services-modal', '.services-modal__close');
slider('.benefits-inner', 3, '.benefits__arrow--left', '.benefits__arrow--right');
slider('.services-inner', 2, '.services__arrow--left', '.services__arrow--right');
timer('25 september 2023');
sendForm({ 
    someElem: [{type: 'input', id: 'calc-total'}] 
});