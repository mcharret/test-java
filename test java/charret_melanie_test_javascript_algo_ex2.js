// function to check if all the positions are numbers from 1 to 9 and all different from each other
function F21 (A) {
    let setOfNumbers = new Set(A);
    if (setOfNumbers.size === 9 && A.every(num >= 1 && num <= 9)) {
        return true;
    } else {
        return false;
    }
}





