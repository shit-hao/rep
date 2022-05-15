
// 每隔几秒执行一个函数 point Promise链条
let count = 0
let limit = 3
let timer = 3000
let tasking = []
let tasks = []

function run(task){
  task().then(()=>{
    if(tasks.length > 0){
      run(tasks.shift())
    }
  })
}

function add(fn){
  let task = () => {
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        fn()
        res()
      }, timer)
    })
  }
  if(tasking.length === 0){
    tasking.push(task)
    run(task)
  } else {
    tasks.push(task)
  }
}

function exec(fn){
  while(count < limit){
    count++
    add(fn)
  }
}


exec(()=>{
  console.log(Date.now())
},3,2000)