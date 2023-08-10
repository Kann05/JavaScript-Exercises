const CalculateTotal = () => {
    const calculateButton = document.querySelector('#js-call-order');
    const getPrice = document.querySelector('#js-cost-order');

    calculateButton.addEventListener('click', () => {
        let cost = parseFloat(getPrice.value);

        if (cost < 50) {
            cost = cost + 10;
        }

        document.querySelector('#amount').innerHTML = `Price: ${cost}$`;
    });

    getPrice.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            calculateButton.click();
        }
    });
}

CalculateTotal();
