public class Solution
{
    public bool hasDuplicate(int[] nums)
    {
        var uniqueSet = new HashSet<int>();
        foreach (var num in nums)
        {
            if (!uniqueSet.Add(num))
            {
                return true; // Found a duplicate
            }
        }

        return false;
    }
}