// https://zhuanlan.zhihu.com/p/68708792
// 洗牌算法

function shuffle(arr) {
  let m = arr.length;
  while (m){
      let index = Math.floor(Math.random() * m--);
      let cur = arr[m];
      arr[m] = arr[index];
      arr[index] = cur;
  }
  return arr;
}


getRandom([1,2,3,4,5,6])