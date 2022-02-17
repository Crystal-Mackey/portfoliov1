import './App.css';
import About from './components/AboutMe';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {
  const [state, setState] = useState({ items: [<About />] });
  const [extraComponents] = useState([
    <Home/>,
    <Portfolio />,
    <Skills />,
    <Contact />
  ]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    console.log("extraC", extraComponents[count]);
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]])
      });
      setCount(count + 1);
    }, 500);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>A product of Crystal Mackey's Mind 🧠</b>
          </p>
        }
      >
        {state.items.map((i, index) => i)}
      </InfiniteScroll>
    </div>
  );
}

export default App;