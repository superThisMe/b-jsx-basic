import React from 'react';
import './App.css';

function App() {
  const name = "John Doe";
  const style = {
    backgroundColor: 'green',
    color: 'red'
  }
  return (
    <>
      <h1 style={ style }>Hello, React World !!!!!</h1>
      <h1 style={ {
        backgroundColor: 'gray',
        color: 'blue'
      } }>Hello { name } !!!!!</h1>
      <div className="react">Styled Element !!!!!</div>
      <span>TEST 1</span>
      <br />
      {/* JSX의 주석입니다. */}
      <span
        //여기에는 //주석을 사용할 수 있습니다.
      >TEST 2</span>
    </>
  );

}

export default App;
