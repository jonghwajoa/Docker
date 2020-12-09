import React, {useEffect, useState} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [lists,setLists] = useState(["안녕하세요","반갑습니다"]);
  const [value,setValue] = useState("");
  
  useEffect(async ()=> {
    try {
      const res = axios.get('/api/values')
      setLists(res.data)
    }catch(err) {
      console.error(err);
    }
  }, []);

  const onChangeInputHandler = (event) => {
    setValue(event.target.value)
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/value', {value})
      console.log(response.data);
    }catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          {lists && lists.map((list, index) => <li key={index}>{list}</li>)}
          <br />
          안녕하세요
          <form className="example" onSubmit={onSubmitHandler}>
            <input type='text' placeholder='입력해주세요..' onChange={onChangeInputHandler}></input>
            <button type='submit'>확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
