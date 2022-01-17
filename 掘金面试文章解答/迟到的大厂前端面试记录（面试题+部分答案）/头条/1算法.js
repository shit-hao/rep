// function calc(str){
//   let sMap = {
//     length: 0
//   }
//   let length = 0
//   Array.from(str).forEach((item, index)=>{
//     if(!sMap[item]){
//       sMap[item] = true
//       sMap.length ++
//       length ++
//     }else{
//       if(sMap.length > length){
//         length = sMap.length
//         sMap = {
//           length: 0
//         }
//       }
//     }
//   })
//   console.log(length)
// }
// calc('ppppppp')
function calc(str){
  let sMap = new Map()
  let length = 0
  Array.from(str).forEach((item, index)=>{
    if(!sMap.has(item)){
      sMap.set(item,true)
      length ++
    }else{
      if(sMap.size > length){
        length = sMap.size
        sMap = new Map()
      }
    }
  })
  console.log(length)
}
calc('abcabcbb')