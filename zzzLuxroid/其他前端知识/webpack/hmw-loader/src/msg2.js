export const msg2 = '深入理解JS'

let pro = new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log('1')
    console.log(1)
  },1000)
})
let arr = [pro,pro,pro]