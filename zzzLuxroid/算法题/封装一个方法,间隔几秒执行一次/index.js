
// 每隔几秒执行一个函数 point Promise链条
let count = 0
let limit = 6
let maxCount = 2
// let timer = 3000
let tasking = []
let tasks = []

function run(task) {
  task().then(() => {
    if (tasks.length > 0) {
      run(tasks.shift())
    }
  })
}

function add(fn, timer) {
  let task = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        fn()
        res()
      }, timer)
    })
  }
  if (tasking.length < maxCount) {
    tasking.push(task)
    run(task)
  } else {
    tasks.push(task)
  }
}

function exec(fn, timer) {
  // while(count < limit){
  // count++
  add(fn, timer)
  // }
}


// exec(() => {
//   console.log(Date.now())
// }, 3000)

exec(() => {
  console.log(1)
}, 1000)
exec(() => {
  console.log(2)
}, 500)
exec(() => {
  console.log(3)
}, 600)
exec(() => {
  console.log(4)
}, 400)