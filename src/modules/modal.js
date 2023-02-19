export const modal = (selectorBtns, selectorModal, selectorModalClose, selectorOverlay = '.overlay') => {
    
    const btns = document.querySelectorAll(selectorBtns);
    const modal = document.querySelector(selectorModal); 
    const modalClose = modal.querySelector(selectorModalClose); 
    const overlay = document.querySelector(selectorOverlay); 


    const addStyles = (blockOne, blockTwo, property = 'block') => {
        blockOne.style.display = property;
        blockTwo.style.display = property;
    };

    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            addStyles(modal, overlay, 'block');
        });
    });


    modalClose.addEventListener('click', () => {
        addStyles(modal, overlay, 'none');
    });


    overlay.addEventListener('click', () => {
        addStyles(modal, overlay, 'none');
    });

};