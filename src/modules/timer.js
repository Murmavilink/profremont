export const timer = (deadline) => {
    const timeItems = document.querySelectorAll('.count-wrap .count span');
    const wordItems = document.querySelectorAll('.count-text');

    let idInterval;


    const numWord = (value, words) => {
        value = Math.abs(value) % 100;
        const lastNum = value % 10;
        if(value > 10 && value < 20) return words[2];
        if(lastNum > 1 && lastNum < 5) return words[1];
        if(lastNum == 1) return words[0];
        return words[2];
    };


    const showTimeСontent = (elements, array) => {
        elements.forEach((element, index) => element.textContent = array[index]);
    };


    const clearTime = (getTime) => {
        if(getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            timeItems.forEach(item => item.textContent = '00');
        }
    };


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
    
        return { timeRemaining, days, hours, minutes, seconds };
    };


    const updateClock = () => {
        let getTime = getTimeRemaining();

        const fDays       =   getTime.days < 10 ? '0' + getTime.days : getTime.days;
        const fHours      =   getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        const fMinutes    =   getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        const fSeconds    =   getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;

        const wordDay     =   numWord(fDays, ['день', 'дня', 'дней']);
        const wordHours   =   numWord(fHours, ['час', 'часа', 'часов']);
        const wordMinutes =   numWord(fMinutes, ['минута', 'минуты', 'минут']);
        const wordSeconds =   numWord(fSeconds, ['секунда', 'секунды', 'секунд']);


        // массив времини
        const timeArray = [fDays, fHours, fMinutes, fSeconds, fDays, fHours, fMinutes, fSeconds];
        
        // массив слов
        const wordsArray = [wordDay, wordHours, wordMinutes, wordSeconds, wordDay, wordHours, wordMinutes, wordSeconds];
        

        showTimeСontent(timeItems, timeArray);
        showTimeСontent(wordItems, wordsArray);
        clearTime(getTime);
    };


    idInterval = setInterval(updateClock, 1000);

    updateClock();
};
