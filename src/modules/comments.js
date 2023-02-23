export const comments = async () => {
    const commentsContainer = document.querySelector('.comments-container');

    const res = await fetch('https://commentsdb-d661a-default-rtdb.firebaseio.com/comments.json')
    const comments = await res.json();

    let countColor = 0;
    let countPosition = 0;
    let postionStatus = true;
    
    const arrayClassesColor = ['review-green', 'review-gray', 'review-orange'];
    const arrayClassesPosition = ['review-arrow-left', 'review-arrow-right'];


    const incrementCount = (array1, array2) => {
        countColor++;
        countPosition++;

        if(countColor > array1.length - 1) countColor = 0;
        if(countPosition > array2.length - 1) countPosition = 0;
    };


    const returnHtml = (status, comment) => {
        if(status) {
            postionStatus = !postionStatus;
        return `<div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(comment.image) ? comment.image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner ${arrayClassesColor[countColor]} review-arrow ${arrayClassesPosition[countPosition]}">
                    <p class="text-normal">${comment.author}</p>
                    <p>${comment.comment}</p>
                </div>
            </div>`;
        } else {
            postionStatus = !postionStatus;
        return ` <div class="col-xs-9 col-sm-9">
                <div class="review-inner ${arrayClassesColor[countColor]} review-arrow ${arrayClassesPosition[countPosition]}">
                    <p class="text-normal">${comment.author}</p>
                    <p>${comment.comment}</p>
                </div>
            </div>
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                <img src="images/users/${(comment.image) ? comment.image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>`;
        }
    };


    const renderComments = (data) => {
        commentsContainer.innerHTML = '';

        data.forEach(comment => {
            commentsContainer.insertAdjacentHTML('beforeend', `
            <div class="review-margin-bottom row comment-item">
            ${returnHtml(postionStatus, comment)}
            </div>`);


            incrementCount(arrayClassesColor, arrayClassesPosition);;
        });
    };


    renderComments(comments);
};