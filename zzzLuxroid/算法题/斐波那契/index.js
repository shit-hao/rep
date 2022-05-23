//  0 1 1 2 3 5 8

// f(n) = f(n-1) + f(n-2)
function geta(n){
  if(n <= 1){
    return n
  }
  return geta(n-1) + geta(n-2)
}
console.log('geta')
// console.log(geta(5))

function getb(){
  let arr = [0,1]
  for (let i = 2; i < 20; i++) {
    // const element = array[index];
    arr.push(arr[i-1] + arr[i-2])
  }
  console.log('arr')
  console.log(arr)
  console.log(arr.length)
}
getb()
console.log('getb().length')