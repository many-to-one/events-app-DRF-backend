import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import EventList from './components/pages/EventList';
import MonthResults from './components/pages/MonthResults';
import NewEventPage from './components/pages/NewEventPage';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" exact element={<EventList/>} />
            <Route path="/events/:id" element={<NewEventPage /> } />
            <Route path="/result" exact element={<Result/>} />
            <Route path="/month_result" exact element={<MonthResults/>} />
          </Routes>
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;
