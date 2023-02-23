export const comments = async () => {
    const commentsContainer = document.querySelector('.comments-container');

    let commentList = [];
    let idInterval;


    const renderComments = (data) => {
        commentsContainer.innerHTML = '';
        commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(data[0].image) ? data[0].image :'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-green review-arrow review-arrow-left">
                    <p class="text-normal">${data[0].author}</p>
                    <p>${data[0].comment}</p>
                </div>
            </div>
        </div>

        <div class="review-margin-bottom row comment-item">
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-gray review-arrow review-arrow-right">
                    <p class="text-normal">${data[1].author}</p>
                    <p>${data[1].comment}</p>
                </div>
            </div>
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(data[1].image) ? data[1].image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
        </div>

        <div class="row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(data[2].image) ? data[2].image : 'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-orange review-arrow review-arrow-left">
                    <p class="text-normal">${data[2].author}</p>
                    <p>${data[2].comment}</p>
                </div>
            </div>
        </div>`);
    };


    
    try {
        const res = await fetch('https://commentsdb-d661a-default-rtdb.firebaseio.com/comments.json')
        const comments = await res.json();

        comments.forEach(comment => {
            commentList.push(comment);
        });

        const updateComments = (arr) => {

            arr.push(arr[0]);
            arr.splice(0, 1);
    
            renderComments(arr);
    
            if (!arr) {
                console.log('not array');
                clearInterval(idInterval);
            }
        };
    
        setInterval(() => {
            idInterval = setInterval(updateComments(commentList), 5000);
        }, 5000);
        
        renderComments(comments);
    } catch(error) {
        console.log(error.message);
    }
};