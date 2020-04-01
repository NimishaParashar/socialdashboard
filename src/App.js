import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Post from './Post'
import Users from './Users'
import Home from './Home'
import UsersPost from './UsersPost'
import PostInformation from './PostInformation'

function App(){
    return (
        <BrowserRouter>
    <div>
       

        <label><Link to="/home">Home</Link></label> |
        <label><Link to="/users">Users</Link></label> |
        <label><Link to="/posts">Posts</Link></label> |
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} exact={true}/>
        <Route path="/posts" component={Post} exact={true}/>
        <Route path="/users/:id/:name" component={UsersPost} />
        <Route path="/posts/:id" component={PostInformation} />
    </div>
    </BrowserRouter>)
}
export default App