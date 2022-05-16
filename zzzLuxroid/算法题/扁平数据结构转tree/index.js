// https://juejin.cn/post/6983904373508145189

// let arr = [
//   {id: 1, name: '部门1', pid: 0},
//   {id: 2, name: '部门2', pid: 1},
//   {id: 3, name: '部门3', pid: 1},
//   {id: 4, name: '部门4', pid: 3},
//   {id: 5, name: '部门5', pid: 4},
// ]
// [
//   {
//       "id": 1,
//       "name": "部门1",
//       "pid": 0,
//       "children": [
//           {
//               "id": 2,
//               "name": "部门2",
//               "pid": 1,
//               "children": []
//           },
//           {
//               "id": 3,
//               "name": "部门3",
//               "pid": 1,
//               "children": [
//                   // 结果 ,,,
//               ]
//           }
//       ]
//   }
// ]
function arrayToTree(arr) {
  let result = []
  arr.forEach(i => {
    i.children = []
    let child = arr.filter((j)=>{
      return i.id === j.pid
    })
    if (child.length > 0){
      result.push({
        ...i,
        children: child
      })
    }
  })
  console.log('result')
  console.log(result)
}
let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 7, name: '部门5', pid: 6},
]

arrayToTree(arr)

