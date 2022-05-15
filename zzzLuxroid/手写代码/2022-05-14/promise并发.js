let tasking = []
let tasks = []
let limit = 0


function run(proTask) {
  proTask().then((res)=>{
    if(tasks.length > 0){
      run(tasks.shift())
    }
  })
}

function add(fn, wait) {
  let proTask = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log('1234')
        console.log(1234)
        fn()
        res()
      }, wait)
    })
  }
  if (tasking.length === 0) {
    tasking.push(proTask)
    run(proTask)
  } else {
    tasks.push(proTask)
  }
}


function exec(fn, count, wait) {
  while (limit < count) {
    add(fn, wait)
    limit++
  }
}



exec(() => {
  console.log(Date.now())
}, 3, 2000)