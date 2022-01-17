// function clone(target) {
//   if (typeof target === 'object') {
//       let cloneTarget = Array.isArray(target) ? [] : {};
//       for (const key in target) {
//           cloneTarget[key] = clone(target[key]);
//       }
//       return cloneTarget;
//   } else {
//       return target;
//   }
// };

function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
          return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target

clone(target)
