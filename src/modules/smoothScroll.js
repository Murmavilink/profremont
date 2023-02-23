export const smoothScroll = () => {
    const upSection = document.querySelector('.up');
    const scrollBtn = document.querySelector('.smooth-scroll');
    

    const scrollToSection = (section) => {
        if(section) {
            section.scrollIntoView({
                block: "center", 
                behavior: "smooth"
            });
        }
    };


    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 500) {
            scrollBtn.style.display = 'block';

            scrollBtn.addEventListener('click', () => {
                scrollToSection(upSection);
            });
            
        } else {
            scrollBtn.style.display = 'none';
        }
    });

};