import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ES6の記法
const name = {
  firstName: 'Takuya',
  lastName: 'Kikuchi'
}
let  count = 0;
for (let i = 0; i < 10; i++) {
  count++;
}

function Hello(params) {
  return(
    <div>
      <h1>
        こんにちは { name.lastName + name.firstName } さん { count + 1 }回目の訪問ですね。
      </h1>
      <p>
        Helloコンポーネントが書き出されました！
      </p>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
