"use strict";
function activate() {
    const buttonElem = document.getElementById('calculateButton');
    buttonElem && buttonElem.addEventListener('click', handleButtonClick);
}
/* region
Funktion som lägger till och lyssnar på knapp. && om buttonElem är ett giltigt element,
vilket i detta fall det är kommer addEventListener att köras. kallas för Kortslutningsutvärdering
endregion*/
/* region
Allt i denna funktion hanterar när calculateButton klickas på.
endregion*/
function handleButtonClick() {
    const tip = percentageInput('tip');
    const sum = numberInput('sum');
    const numberOfFriends = numberInput('numberOfFriends');
    const calculatedTip = calculateTip(sum, tip);
    const totalAmount = calculateTotalAmount(sum, calculatedTip);
    const friendSum = calculateFriendSum(totalAmount, numberOfFriends);
    showDividedSum(friendSum);
}
function percentageInput(id) {
    const inputValue = numberInput(id);
    return inputValue / 100.0;
}
function numberInput(id) {
    const input = document.getElementById(id);
    return input ? parseFloat(input.value) : 0;
}
function calculateTip(sum, tip) {
    return sum * tip;
}
function calculateTotalAmount(sum, tip) {
    return sum + tip;
}
function calculateFriendSum(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    const showSumElem = document.getElementById('showSum');
    const inputFormElem = document.getElementById('inputForm');
    const friendSumElem = document.getElementById('friendSum');
    if (showSumElem && inputFormElem && friendSumElem) {
        showSumElem.classList.toggle('hide');
        inputFormElem.classList.toggle('hide');
        friendSumElem.innerHTML = `${sum} kr`;
    }
}
activate();
