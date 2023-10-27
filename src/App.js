
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/homescreen/homescreen';
import Login from './screens/login/loginscreen';
import SignUpScreen from './screens/signup/signupscreen';
import SignUpScreen2 from './screens/signup2/signupscreen2';
//import ResourceScreen from './screens/resourcescreen';
//import AlumniScreen from './screens/alumniscreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signup2" element={<SignUpScreen2 />} />
        {/* Add more routes for other screens */}
      </Routes>
    </Router>
  );
}

export default App;

