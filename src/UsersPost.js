import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UsersPost extends React.Component{
    constructor(){
        super()
        this.state={
            usersPost:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        const name=this.props.match.params.name
        console.log(id,name)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((response)=>{
            const usersPost=response.data
            this.setState({usersPost})
            
        }).catch((err)=>{
console.log(err)
        })

    }
    render(){
        return(<div>

            <h1>User Name: {this.props.match.params.name}</h1>
            <h3>POSTS WRITTEN BY USER</h3>
            <ul>
               {this.state.usersPost.map(post=>{
                   return <li key={post.id}>
                       <Link to={`/posts/${post.id}`}>{post.title}</Link>
                       </li>
               })}
            </ul>
        </div>)
    }
}
export default UsersPost