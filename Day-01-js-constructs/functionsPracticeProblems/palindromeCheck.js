function isPalindrome(num) {
    let original = num.toString();  // Convert number to string
    let reversed = original.split('').reverse().join(''); // Reverse the string
    return original === reversed;
}

// Function to check if two numbers are palindromes
function checkPalindromes(num1, num2) {
    console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome`);
    console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome`);
}

// Example usage
checkPalindromes(121, 12321);  // Both are palindromes
checkPalindromes(123, 456);    // Neither is a palindrome
