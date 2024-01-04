import './App.css';
import MyRoutes from './routers/routes';
import { SiThemoviedatabase } from "react-icons/si";


function App() {

  return (
    <>
      <header>
        <h1 className='title'><SiThemoviedatabase/> Movflix</h1>
      </header>
      <MyRoutes />
    </>
  )
}

export default App
