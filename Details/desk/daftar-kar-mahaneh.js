let seatCount = 10;
const pricePerSeat = 37800000;

function toPersianNumber(num) {
    const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return num.toString().replace(/\d/g, d => persianDigits[d]);
}

function formatPersianPrice(num) {
    return toPersianNumber(num.toLocaleString('en-US'));
}

function updatePrice(){
    document.getElementById("seatCount").innerText = toPersianNumber(seatCount);
    document.getElementById("totalPrice").innerText = formatPersianPrice(seatCount * pricePerSeat);
}

function increase(){
    seatCount++;
    updatePrice();
}

function decrease(){
    if(seatCount > 1){
        seatCount--;
        updatePrice();
    }
}