class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        var alphabet = new Array(26).fill(0);
        
        for (let index = 0; index < s.length; index++) {
            alphabet[s.charCodeAt(index) - 97]++;
            alphabet[t.charCodeAt(index) - 97]--;
        }

        return alphabet.every(x => x === 0);
    }
}
