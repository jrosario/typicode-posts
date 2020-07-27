import React, { Component } from 'react';

import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import Input from './components/input/input'
import PostList from './components/post-list/post-list'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [],
      inputField: ''
    };

    this.editPostSubmit = this.editPostSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/", {})
      .then((response) => {
        this.setState({
          postList: response.data
        });
      })
      .catch((error) => { alert("There is an error in the API call."); });
  }

  handleInputChange = e => {
    this.setState({ inputField: e.target.value });
  }

  editPostSubmit(id, title, body) {
    let postListCopy = this.state.postList.map((post) => {

      if (post.id === id) {
        post.title = title;
        post.body = body;
      }
      return post;
    });

    this.setState((prevState, props) => ({
      postList: postListCopy
    }));
  }

  render() {
    const { postList, inputField } = this.state;

    const filteredPosts = postList.filter(post =>
      post.title.toLowerCase().includes(inputField.toLowerCase())
    )

    return (
      <div>
        <div className="container-fluid">
          <div className="row mt-3"><div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <Input placeholder='search posts' handleInputChange={this.handleInputChange} />
              </div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Title</th>
                      <th>Body</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <PostList
                    postList={filteredPosts}
                    editPostSubmit={this.editPostSubmit}
                  />
                </table>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;