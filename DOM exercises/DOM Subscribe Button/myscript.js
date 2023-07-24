function ButtonChanger() {
    const subscribeButton = document.querySelector('.js-subscribeButton');
    
    if (subscribeButton.innerText === 'Subscribe'){
        subscribeButton.innerText = 'Subscribed';
        subscribeButton.classList.add('is-subscribed');
    }
    else {
        subscribeButton.innerText = 'Subscribe';
        subscribeButton.classList.toggle('is-subscribed')
    }
}
