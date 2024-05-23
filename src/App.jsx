import {Routes, Route} from 'react-router-dom';
import Home from './Components/home';
import Login from './Components/login';
import Jobs from './Components/jobs';
import NotFound from './Components/NotFound';

const App = () => (
    <Routes>
        <Route path='/' element = {<Home/>}> </Route>
        <Route path='/login' element = {<Login/>}> </Route>
        <Route path='/jobs' element = {<Jobs/>}> </Route>
        <Route path='/*' element = {<NotFound/>}> </Route>
    </Routes>
)

export default App;