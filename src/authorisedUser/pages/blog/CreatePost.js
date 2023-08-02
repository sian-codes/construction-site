import {useState} from "react";
import Editor from "../../components/Editor";
import Card from "../../../components/card/Card";
import {Navigate} from "react-router";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('sub-title', subTitle);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/blog'} />
    }

    return (
        <Card>
        <form onSubmit={createNewPost}>
            <input type="title"
                   placeholder={'Title'}
                   value={title}
                   onChange={ev => setTitle(ev.target.value)} />
            <input type="sub-title"
                    placeholder={'Sub-Title'}
                    value={subTitle}
                    onChange={ev => setSubTitle(ev.target.value)} />
            <input type="file"
                    onChange={ev => setFiles(ev.target.files)}/>
            <Editor value={content}
                    onChange={setContent} />
            <button>Create Post</button>
        </form>
        </Card>
    )
}
