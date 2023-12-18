import  {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Root from '../src/Components/Pages/Root';
import List from './Components/List';
import AboutRoot from './Components/Pages/AboutRoot';
import Home from './Components/Home';
import Movies from './Movies';


let router = createBrowserRouter([{
  path : '/' , element: <Root/>,  errorElement : <h1>Error Page</h1>, children :[
    {path : '/', element : <List/>}, {path:'/about', element : <AboutRoot/>}, {
      path : '/home', element: <Home/>
    }
  ]},

  ])
function App() {
  
  // return (<RouterProvider router={router}/>
  return <Movies/>
  // );
}


export default App;
