function promiseall(promises) {
    return new Promise(resolve => {
      let result = [];
      let flag = 0;
      let taskQueue = promises.slice(0, 3); //任务队列，初始为最大并发数3
      let others = promises.slice(3); //排队的任务
      taskQueue.forEach((promise, i) => {
        singleTaskRun(promise, i);
      });
      let i = 3; //新的任务从索引3开始
      function next() {
        if (others.length === 0) {
          return;
        }
        const newTask = others.shift();
        singleTaskRun(newTask, i++);
      }
      function singleTaskRun(promise, i) {
        promise
          .then(res => {
            check();
            result[i] = res;
            next();
          })
          .catch(err => {
            check();
            result[i] = err;
            next();
          });
      }
      function check() {
        flag++;
        if (flag === promises.length) {
          resolve(result);
        }
      }
    });
  }
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 1000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 1500);
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 2000);
  });
  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4");
    }, 2500);
  });
  let p_e = new Promise((resolve, reject) => {
    // throw new Error("出错");
    reject("错误");
  });
  let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("5");
    }, 5000);
  });
  
  let all = promiseall([p_e, p1, p3, p2, p4, p5]);
  all.then(
    data => {
      console.log("data", data);    // [ '错误', '1', '3', '2', '4', '5' ]
    }
  );