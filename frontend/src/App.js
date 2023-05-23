// import './App.css';
import { Route, createRoutesFromChildren, createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from './layout/RootLayout';
import { Logout } from './pages/auth/Logout';
import { Signup } from './pages/auth/Signup';
import { Login } from './pages/auth/Login';
import About from "./pages/About";

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="" element={<RootLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path='/about' element={<About />} />
        </Route>
    )
)

function App() {
  return (<RouterProvider router={router}/>);
}

export default App;














{/* <Route path='/:username/' element={<Upload />} />
<Route path='/:username/profile' element={<Profile />} />
<Route path="/:username/:conversation" element={<ChatPage/>}/>
<Route path='*' element={<NotFound />} />  */}

