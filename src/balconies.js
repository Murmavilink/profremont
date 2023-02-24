import { modal } from "./modules/modal";
import { slider } from "./modules/slider";
import { timer } from "./modules/timer";
import { sendForm } from "./modules/sendForm";
import { comments }  from "./modules/comments";
import { calc } from "./modules/calc";
import { smoothScroll } from "./modules/smoothScroll";

modal('#header .fancyboxModal', '.header-modal', '.header-modal__close');
modal('#services .fancyboxModal', '.services-modal', '.services-modal__close');
modal('#documents .sertificate-document', '.sertificate__modal', '.sertificate__btn-close');
slider('.benefits-inner', 3, '.benefits__arrow--left', '.benefits__arrow--right');
slider('.services-inner', 2, '.services__arrow--left', '.services__arrow--right');
timer('25 september 2023');
sendForm({ 
    someElem: [{type: 'input', id: 'calc-total'}] 
});
comments();
calc(1000);
smoothScroll();