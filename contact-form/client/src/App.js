import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import ThankYou from './Components/ThankYou';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
