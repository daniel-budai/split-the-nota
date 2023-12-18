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
function handleButtonClick(): void {
    const tip: number = percentageInput('tip');
    const sum: number = numberInput('sum');
    const numberOfFriends: number = numberInput('numberOfFriends');
    const calculatedTip: number = calculateTip(sum, tip);
    const totalAmount: number = calculateTotalAmount(sum, calculatedTip);
    const friendSum: number = calculateFriendSum(totalAmount, numberOfFriends);

    showDividedSum(friendSum);
}

function percentageInput(id: string): number {
    const inputValue: number = numberInput(id);
    return inputValue / 100.0;
}

function numberInput(id: string): number {
    const input: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement | null;
    return input ? parseFloat(input.value) : 0;
}

function calculateTip(sum: number, tip: number): number {
    return sum * tip;
}

function calculateTotalAmount(sum: number, tip: number): number {
    return sum + tip;
}

function calculateFriendSum(total: number, numberOfFriends: number): number {
    return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
    const showSumElem: HTMLElement | null = document.getElementById('showSum');
    const inputFormElem: HTMLElement | null = document.getElementById('inputForm');
    const friendSumElem: HTMLElement | null = document.getElementById('friendSum');

    if (showSumElem && inputFormElem && friendSumElem) {
        showSumElem.classList.toggle('hide');
        inputFormElem.classList.toggle('hide');
        friendSumElem.innerHTML = `${sum} kr`;
    }
}

activate();
