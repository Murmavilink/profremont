export const validate = (formInputs) => {
  const nameInputs = document.querySelectorAll("input[name='fio']");
  const telInputs = document.querySelectorAll("input[name='phone']");

  let statusValidate;


  nameInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\d/i, "");
    });
  });


  const checkValidation = (formInputs) => {

    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].value.trim().length < 2) {
        formInputs[i].classList.add('error');
      } else {
        formInputs[i].classList.remove('error');
      }

      if (formInputs[i].name === 'phone') {
        if (formInputs[i].value.trim().length < 18) formInputs[i].classList.add('error');
      }
    }

    for (let i = 0; i < formInputs.length; i++) {
      if (formInputs[i].classList.contains('error')) {
        return statusValidate = false;
      } else if (!formInputs[i].classList.contains('error')) {
        statusValidate = true;
      }
    }


    return statusValidate;
  };

  
  const maskPhone = (elems, masked = '+7 (___) ___-__-__') => {
    const mask = event => {
      const { keyCode, target } = event;
      const template = masked;
      const def = template.replace(/\D/g, '');
      const val = target.value.replace(/\D/g, '');

      let i = 0;
      let newValue = template.replace(/[_\d]/g, (a) =>
        i < val.length ? val.charAt(i++) || def.charAt(i) : a);

      i = newValue.indexOf('_');

      if (i !== -1)
        newValue = newValue.slice(0, i);

      let reg = template.substr(0, target.value.length)
        .replace(/_+/g, ({ length }) => `\\d{1,${length}}`)
        .replace(/[+()]/g, '\\$&');

      reg = new RegExp(`^${reg}$`);

      if (!reg.test(target.value) || target.value.length < 5 || keyCode > 47 && keyCode < 58) {
        target.value = newValue;
      }

      if (event.type == 'blur' && target.value.length < 5) {
        target.value = '';
      }
    };

    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  };

  maskPhone(telInputs);

  if (formInputs) statusValidate = checkValidation(formInputs);
  return statusValidate;
};