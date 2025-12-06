public class Solution {
    public bool IsAnagram(string s, string t)
    {
        if (s.Length != t.Length)
            return false;

        var alphabet = new int[26];

        for (int i = 0; i < s.Length; i++)
        {
            alphabet[s[i] - 'a']++;
            alphabet[t[i] - 'a']--;
        }

        return alphabet.All(x => x == 0);
    }
}
