function CalculateTotal() {
    const getPrice = document.querySelector('#js-cost-order');
    let cost = parseFloat(getPrice.value);

    if (cost < 50) {
        cost = cost + 10;
    }

    document.querySelector('#amount').innerHTML = `Price: ${cost}$`;
}
