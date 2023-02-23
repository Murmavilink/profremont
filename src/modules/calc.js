export const calc = (price = 1000) => {
    const calcBlock = document.getElementById('calc');
    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const caclSquare = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');


    const calcCount = () => {
        const calcTypeValue = parseFloat(calcType.value);
        const calcTypeMaterialValue = parseFloat(calcTypeMaterial.value);
        const caclSquareValue = parseFloat(caclSquare.value);

        let totalValue = 0;

        if(calcTypeValue && calcTypeMaterialValue && caclSquareValue) {
            // totalValue = caclSquareValue * calcTypeValue * calcTypeMaterialValue;
            totalValue = price * caclSquareValue * calcTypeValue * calcTypeMaterialValue;
        }

        return totalValue;
    };


    try {
        calcBlock.addEventListener('input', (e) => {
            calcTotal.value = calcCount();
        });

        caclSquare.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^.\d]+/g, '');
        });
    } catch(error) {
        console.log(error.message);
    }
    
};