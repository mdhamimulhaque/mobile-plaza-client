import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  return (
    <div className="App max-w-[1600px] mx-auto text-gray-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
