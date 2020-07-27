import React, { Component } from 'react';
import PostItem from '../../components/post-item/post-item';

export default class PostList extends Component {
    render() {
        let posts = this.props.postList;
        const trItem = posts.map((item, index) => (
            <PostItem
                key={index}
                post={item}
                index={index}
                editPostSubmit={this.props.editPostSubmit}
            />
        ));
        return <tbody>{trItem}</tbody>;
    }
}