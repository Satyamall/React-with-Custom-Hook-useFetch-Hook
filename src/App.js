
import { useState } from 'react';
import './App.css';
import useFetch from './Hook/useFetch';

function App() {

  // const [page,setPage]=useState(1);
  const [user,setUser]=useState("");
  const [url,setUrl]=useState(`https://api.github.com/search/users?q=masai`);

  const {loading,error,data}=useFetch(url);
  
  const handleSearch = () => {
    setUrl(`https://api.github.com/search/users?q=${user}`);
  };

  return (
    <div className="App">
      <h1>React with Custom Hook useFetch Hook</h1>
      <div>
        <input
          value={user}
          placeholder="Type Users Name for Search"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      <div>
        {
          loading && "LOADING...."
        }
        {
          error && "Something went worng"
        }
      </div>
      <div>
        {
          !loading && 
          data?.items?.map((item)=>(
            <div
              style={{
                border: "1px solid black",
                padding: 10,
                margin: 10,
                background: "cadetblue",
                color: "white"
              }}
              key={item.login}
            >
              {item.login}
            </div>
          ))
        }
      </div>
      {/* <div>
        {page >= 1 && (
          <button onClick={() => setPage((prev) => prev - 1)}>PREV</button>
        )}
        <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>
      </div> */}
    </div>
  );
}

export default App;
