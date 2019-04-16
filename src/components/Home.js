import React, { Component } from 'react';
import axios from 'axios';
import { createDecipher } from 'crypto';

class Home extends Component {
  state = {
    posts : []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>
      { console.log(response)
        this.setState({
          posts : response.data.slice(0,10)
        })
      }
    )
  }

  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>  
        )
      })
    ) : (
      <div className="center"> No post yet</div>
    ) 
    
    return (  
      <div className="container">
      <h4 className="center">Home</h4>
        {postList}
      </div>  
    );
  }
}
 
export default Home;