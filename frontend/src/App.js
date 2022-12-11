import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import EventList from './components/pages/EventList';
import EventPage from './components/pages/EventPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<EventList/>} />
          <Route path="/events/:id" element={<EventPage /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
