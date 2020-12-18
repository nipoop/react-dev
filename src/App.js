import React, {useState} from 'react';
import Child1 from './child1';
import Child2 from './child2';
import './App.css';

function App() {
  console.log('App re-render');
  const [count, setCount] = useState(0);
  const handleBtn = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
        <button onClick={handleBtn}>{`click${count}`}</button>
        <Child1
          count={count}
        />
        <Child2
          count={count}
        />
    </div>
  );
}

export default App;
