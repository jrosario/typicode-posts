import React, { Component } from 'react';

import './post-item.styles.scss';

import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false }
        this.editPost = this.editPost.bind(this);
        this.editPostSubmit = this.editPostSubmit.bind(this);
    }

    editPost() {
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }))
    }

    editPostSubmit() {
        const { id } = this.props.post;
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }));

        this.props.editPostSubmit(
            id,
            this.titleInput.value,
            this.bodyInput.value
        );
    }

    render() {
        const { title, body } = this.props.post;
        return (
            this.state.isEdit === true ? (
                <tr className="bg-warning" key={this.props.index}>
                    <td>
                        <input ref={titleInput => this.titleInput = titleInput} defaultValue={title} />
                    </td>
                    <td>
                        <textarea defaultValue={body} ref={bodyInput => this.bodyInput = bodyInput} />
                    </td>
                    <td class="middle">
                        <FontAwesomeIcon icon={faSave} className="far fa-save" size="lg" onClick={this.editPostSubmit}>Save</FontAwesomeIcon>
                    </td>
                </tr>
            ) : (
                    <tr key={this.props.index}>
                        <td>{title}</td>
                        <td>{body}</td>
                        <td class="middle">
                            <FontAwesomeIcon icon={faEdit} className="far fa-edit" size="lg" onClick={this.editPost}>Edit</FontAwesomeIcon>
                        </td>
                    </tr>
                )
        );
    }
}