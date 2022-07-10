/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
      let temp=this.map.get(key)
       this.map.delete(key);
       this.map.set(key, temp);
       return temp
  }else{
      return -1
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)){
      this.map.delete(key);
  }
  this.map.set(key,value);
  if(this.map.size > this.capacity){
   
      this.map.delete(this.map.keys().next().value);
  }
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

