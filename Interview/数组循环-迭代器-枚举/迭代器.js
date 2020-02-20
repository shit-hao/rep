//ES6迭代器实现
const iterator = function(arr){
    let i = 0
    return {
        next(){
            let done = i >= arr.length
            let value = !done ? arr[i++] :undefined
            return{
                done,
                value
            }
        }
    }
}
let arrayIterator = iterator([1, 2, 3])

console.log(arrayIterator.next()) // { done: false, value: 1 }
console.log(arrayIterator.next()) // { done: false, value: 2 }
console.log(arrayIterator.next()) // { done: false, value: 3 }
console.log(arrayIterator.next()) // { done: true, value: undefined }