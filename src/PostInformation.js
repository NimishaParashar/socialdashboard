import React from 'react'
import {Link} from'react-router-dom'
import axios from 'axios'
class PostInformation extends React.Component{
    constructor(){
        super()
        this.state={
comments:[],
posts:{},
user:{}
        }
    }
    componentDidMount(){
        const postId=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((response)=>{
const comments=response.data
this.setState({comments})
        }).catch((err)=>{
console.log(err)
        })



        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response)=>{
            const posts=response.data
            this.setState({posts})
            const userid=response.data.userId
            console.log(userid)
            axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`).then((response)=>{
                const user=response.data
                this.setState({user})
            }).catch((err)=>{
                console.log(err)
            })

        }).catch((err)=>{
            console.log(err)
        })

      
        

    }
    render(){
      
        return(<div>
            

        <h1> USER NAME : {this.state.user.name}</h1>
            <h3> TITLE :{this.state.posts.title} </h3>
            <h5> BODY : {this.state.posts.body}</h5>

         
<hr/>
<h3>COMMENTS</h3>

<ul>
    {
        this.state.comments.map(comment=>{
            return <li key={comment.id}>{comment.body}</li>
        })
    }
</ul>
<hr/>
<Link to={`/users/${this.state.user.id}/${this.state.user.name}`}>More posts of author:{this.state.user.name}</Link>
            
        </div>)
    }
}
export default PostInformation