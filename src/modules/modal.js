export const modal = (selectorBtns, selectorModal, selectorModalClose, selectorOverlay = '.overlay') => {

    const btns = document.querySelectorAll(selectorBtns);
    const modal = document.querySelector(selectorModal);
    const modalClose = modal.querySelector(selectorModalClose);
    const overlay = document.querySelector(selectorOverlay);


    const addStyles = (blockOne, blockTwo, method, path) => {
        if(path) {
            blockOne.querySelector('img').setAttribute('src', path);
        }

        if(method === 'add') {
            blockOne.classList.add( selectorModal.substring('1') + '--opened');
            blockTwo.style.display = 'block';
        } else if(method === 'remove') {
            blockOne.classList.remove( selectorModal.substring('1') + '--opened');
            blockTwo.style.display = 'none';
        }
    };


    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const pathImage = e.target.closest('a.sertificate-document');

            if (pathImage) {
                addStyles(modal, overlay, 'add', pathImage.getAttribute('href'));
            } else {
                addStyles(modal, overlay, 'add');
            }

        });
    });


    modalClose.addEventListener('click', () => {
        addStyles(modal, overlay, 'remove');
    });


    overlay.addEventListener('click', () => {
        addStyles(modal, overlay, 'remove');
    });

};