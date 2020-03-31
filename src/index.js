import './index.scss';
import "regenerator-runtime/runtime";

window.onload = () => {
  let time = 2000;
  let p = new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve();
    }, time);
  });
  
  p.then(() => {
    console.log('xxx');
  })
}