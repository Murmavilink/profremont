import { validate } from "./validate";

export const sendForm = ({someElem = []}) => {
    const forms = document.querySelectorAll('form');
    const preloader = document.createElement('div');
    const statusBlock = document.createElement('p');
    const errorText = '<strong>Ошибка...</strong>';
    const succesText = '<strong>Спасибо! Наш менеджер с вами свяжется</strong>';

    preloader.insertAdjacentHTML("beforeend", `
    <div id="preloader"><div id="loader"></div></div>`);


    const clearStatusBlock = () => setTimeout(() => statusBlock.textContent = '', 5000);

    const clearinputsValue = (formElements) => formElements.forEach(input => input.value = '');


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };
    

    const submitForm = (form, formElements) => {
        const formData = new FormData(form);
        const formBody = {};

        form.append(preloader);
        form.append(statusBlock);
        preloader.style.display = "block";

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if(someElem.length) {
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id);
    
                if(element) {
                    if (elem.type === 'block') {
                        formBody[elem.id] = element.textContent;
                    } else if (elem.type === 'input') {
                        formBody[elem.id] = element.value;
                    }
                }
            
            });    
        }
      
        sendData(formBody).then(data => {
            preloader.style.display = "none";

            statusBlock.innerHTML = succesText;
            clearinputsValue(formElements);
            clearStatusBlock();
        }).catch(error => {
            preloader.style.display = "none";
            statusBlock.innerHTML = errorText;

            clearinputsValue(formElements);
            clearStatusBlock();
        });
    };

    try {
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formInputs = e.target.querySelectorAll('input.form-control');

                if (validate(formInputs)) submitForm(e.target, formInputs);
            });

            form.addEventListener('input', (e) => {
                e.preventDefault();
                const formInputs = e.target.closest('form').querySelectorAll('input.form-control');
                
                validate(formInputs);
            });
        });
    } catch (error) {
        console.log(error.message);
    }


    validate();
};