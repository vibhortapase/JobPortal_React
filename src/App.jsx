import {Routes, Route} from 'react-router-dom';
import Home from './Components/home';
import Login from './Components/login';
import Jobs from './Components/jobs';
import NotFound from './Components/NotFound';
import ProtectorRoute from './Components/protectorRoute';

const App = () => (
    <Routes>
        <Route path='/' element = {<ProtectorRoute Component = {Home}/>}> </Route>
        <Route path='/login' element = {<Login/>}> </Route>
        <Route path='/jobs' element = {<ProtectorRoute Component = {Jobs}/>}> </Route>
        <Route path='/*' element = {<NotFound/>}> </Route>
    </Routes>
)

export default App;