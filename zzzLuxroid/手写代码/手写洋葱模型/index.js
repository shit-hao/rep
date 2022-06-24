let middleware = []
middleware.push((next) => {
  console.log(1)
  next()
  console.log(1.1)
})
middleware.push((next) => {
  console.log(2)
  next()
  console.log(2.1)
})
middleware.push(() => {
  console.log(3)
})

// function compose(middlewarw) {
//   return function (args) {
//     dispatch(0);
//     function dispatch(index) {
//       let fn = middlewarw[index] || args;
//       if (typeof fn !== "function") return;
//       let next = () => dispatch(index + 1);
//       fn(next);
//     }
//   }
// };

function compose(middlewarw) {
  return function (args) {
    dispatch(0);
    function dispatch(index) {
      let fn = middlewarw[index] || args;
      if (typeof fn !== "function") return;
      let next = () => dispatch(index + 1);
      fn(next);
    }
  }
};


function compose1(middlewarw){
  run(0)
  function run(index){
    if(index >= middlewarw.length) return
    let fn = middlewarw[index]
    let next = () => run(index + 1)
    fn(next)
  }
}

compose1(middleware)