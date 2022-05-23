function find(arr){
    let result = new Array(10).fill(0)
    let len = arr.length
    arr.forEach(i => {
      i.forEach((j)=>{
        result[j]++
      })
    });
    let a = result.map((item, index)=>{
      if(item === len){
        return index
      }
    }).filter((item)=>{
      return !!item
    })
}

let nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]

console.log(find(nums))