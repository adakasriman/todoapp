import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import TodoFrame from './components/TodoFrame';

function App() {
  return (
    <div className="text-center">
      <Header />
      <TodoFrame />
    </div>
  );
}

export default App;
