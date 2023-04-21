import React, {useState} from 'react';

import Input from '../components/form/Input';
import Button from '../components/buttons/Button';
// import {
//     VALIDATOR_REQUIRE,
//     VALIDATOR_MINLENGTH
// } from '../../shared/util/validators';
import { useForm } from '../hooks/LoginFormHook';
import './NewPost.css';

const NewPost = () => {
    const [formState, inputHandler] = useForm(
        {
            blogPostTitle: {
                value: '',
                isValid: false
            },
            blogPostContent: {
                value: '',
                isValid: false
            },
        },
        false
    );

    const [selectedFile, setSelectedFile] = useState(null);

    const BlogPostSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
    };

    return (
        <form className="place-form" onSubmit={BlogPostSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                // validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
               // validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
            />
            <input
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Create a New Post
            </Button>
        </form>
    );
};

export default NewPost;
