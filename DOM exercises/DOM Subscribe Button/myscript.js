function ButtonChanger() {
    const subscribeButton = document.querySelector('.js-subscribeButton');
    
    if (subscribeButton.innerText === 'Subscribe'){
        subscribeButton.innerText = 'Subscribed';
    }
    else {
        subscribeButton.innerText = 'Subscribe';
    }
}
