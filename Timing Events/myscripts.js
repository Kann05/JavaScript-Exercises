const defaultTitle = document.title;
let firstChange = false;

const changeTitle = () => {
    
    setInterval( () => {
        if (firstChange === false){
            const changeTitle = document.title = '(2) new Messages';
        }

        firstChange = true;

        setTimeout( () => {
            document.title = defaultTitle;
        }, 3000)

        setTimeout( () => {
            changeTitle1 = document.title = '(2) new Messages';
        }, 5000)
    }, true)
}

//-----Start Button-----//

const buttonOnClicked = () => {
    const changeTitle = () => {

        const connectWithButton = document.querySelector('#changeTitle')
        connectWithButton.innerHTML = 'Loading...';

         setTimeout(() => {
            connectWithButton.innerHTML = 'Finished !';
        }, 1000)
    }

    changeTitle();
}

//-----Add to cart-----//

const cartButtonOnClick = () => {
    const appearText = () => {
        const connectWithButton = document.querySelector('#text')

        connectWithButton.innerHTML === '' ? 
        connectWithButton.innerHTML = 'Added': 
        
        setTimeout(() => {
            connectWithButton.innerHTML = '';
        }, 1000);
        
        
    }
    
    appearText();
}