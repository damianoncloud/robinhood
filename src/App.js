import './App.css';
import Header from './Header.js';
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          {/* stats */}
          <Stats />
        </div>
      </div>
      {/* Body */}
    </div>
  );
}

export default App;
