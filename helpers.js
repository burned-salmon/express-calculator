function stringToNumList(numsString) {
    let result = [];
    let numsAsStrings = numsString.split(',');
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

function mean(nums) {
    let total = 0;
        for (let i = 0; i < nums.length; i++) {
            total += nums[i];
        }
        return total / nums.length;
}

function median(nums) {
    const { length } = nums;
        if (length % 2 === 0) {
            return (nums[length / 2 - 1] + nums[length / 2]) / 2;
        }
        return nums[(length - 1) / 2];
}

function mode(nums) {
    const mode = {};
        let max = 0, count = 0;

        for (let i = 0; i < nums.length; i++) {
            const item = nums[i];

            if (mode[item]) {
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }
        return max;
}

module.exports = {
    stringToNumList,
    mean,
    median,
    mode
};