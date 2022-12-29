import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { useEffect, useState } from "react"
import './App.css';
import './styles/signup.css';
import EventsHistoryItem from './components/EventsHistoryItem';
import Header from './components/Header';
import EventList from './components/pages/EventList';
import EventsHistory from './components/pages/EventsHistory';
import Menu from './components/pages/Menu';
import MonthResults from './components/pages/MonthResults';
import NewEventPage from './components/pages/NewEventPage';
import SignUp from './components/pages/SignUp';
import Success from './components/pages/Success';
import Result from './components/Result';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';

function App() {

  const [name, setName] = useState('')

  useEffect(() => {
    getUser()
  }, [])
 
  // ################### GET USERNAME ###################
  const getUser = async () => {
    const response = await fetch("/api/users/user/")
    const data = await response.json()
    setName(data.username)
    console.log(data)
  };

  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          <Header name={name}/>
          <Routes>
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="/logout" exact element={<Logout/>} />
            <Route path="/" exact element={<EventList/>} />
            <Route path="/events/:id" element={<NewEventPage /> } />
            <Route path="/result" exact element={<Result/>} />
            <Route path="/by_month" exact element={<MonthResults/>} />
            <Route path="/success" exact element={<Success />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/events_history" exact element={<EventsHistory />} />
          </Routes>
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;
