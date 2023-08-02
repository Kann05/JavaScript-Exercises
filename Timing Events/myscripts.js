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