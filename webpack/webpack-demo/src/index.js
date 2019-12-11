 import _ from 'lodash';
 import Print from './print';
 import './style.css'

 function component() {
    var element = document.createElement('div');
   var button = document.createElement('button');
   var br = document.createElement('br');
  // console.log(DEV_API)
  console.log(__DEV__)
   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.appendChild(br);
   element.appendChild(button);
   element.onclick = Print.bind(null, 'Hello webpack!');
   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
  //  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //    var print = module.default;

  //    print();
  //  });

    return element;
  }

 document.body.appendChild(component());