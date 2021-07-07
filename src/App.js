import Register from './Register'
import ViewTask from './ViewTask'
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Login from './Login'
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';
import ChangePassword from './ChangePassword'
function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path={["/","/login"]} component={Login}/>

        <Switch>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Viewtask" component={ViewTask}/>
           <Route exact path="/Addtask" component={AddTask}/>
           {/* <Route exact path="/logout" component={Logout}/> */}
          <Route exact path="/UpdateTask/:taskId" component={UpdateTask}/> 
          <Route exact path="/ChangePassword" component={ChangePassword}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
