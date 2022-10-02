import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Home from './Home/index';

export default function RootSaga() {
  return (
    <div>
      <Router>
        <Route  path="/"  element={<Home />} />
      </Router>
    </div>
  );
}
