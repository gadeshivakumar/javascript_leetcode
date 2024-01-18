/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    r=init;

    for(let i=0;i<nums.length;i++)
    {
        r=fn(r,nums[i]);
    }
    
    return r;
};