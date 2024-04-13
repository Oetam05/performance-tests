function longestPalindrome(s) {
    if (s.length === 0) return '';

    let maxLength = 1;
    let start = 0;

    // Helper function to expand around the center for odd and even length palindromes
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Expand around center for odd length palindromes
        expandAroundCenter(i, i);
        // Expand around center for even length palindromes
        expandAroundCenter(i, i + 1);
    }

    return s.substr(start, maxLength);
}

module.exports = { longestPalindrome };


console.log(longestPalindrome("babad"))