class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var setUnique = new Set();
        for (let index = 0; index < nums.length; index++) {
            const element = nums[index];
            if (setUnique.has(element)) {
                return true;
            }
            setUnique.add(element);
        }
        return false;
    }
}
