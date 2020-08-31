function setTarget(nums: Array<number>, target:number){
    let checkTarget = 0
    for(let i= 0; i < nums.length; i++){
        for(let a =0; a < nums.length; a++){
            if(i !== a){
            checkTarget = nums[i] + nums[a]
                if(checkTarget === target){
                    return [i,a]
                }
        }
        }
    }
}

console.log(setTarget([4, 5, 10, 12, 21], 17))