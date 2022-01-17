class Scheduler {
  constructor() {
    this.tasking = []
    this.tasks = []
    this.maxCount = 2
  }
  add(task) {
    return new Promise((res, rej) => {
      task.res = res
      if (this.tasking.length < this.maxCount) {
        this.run(task)
      } else {
        this.tasks.push(task)
      }
    })
  }
  run(task) {
    this.tasking.push(task)
    task().then(() => {
      task.res()
      this.tasking.splice(this.tasking.findIndex((item) => {
        return item === task
      }), 1)
      if (this.tasks.length > 0) {
        this.run(this.tasks.shift())
      }
    })
  }
}

function timeout(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
var scheduler = new Scheduler()

function addTask(time, order) {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)

//要求
// ouput : 2 3 1 4
//一开始1,2俩个任务进入队列
//500ms时,2完成,输出2,任务3进入队列
//800ms时,3完成,输出3,任务4进入队列
//1000ms时,1完成,输出1
//1200ms时,4完成,输出4
