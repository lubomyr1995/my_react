import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <p><b>{id}</b>) {title}</p>
            <Button to={id.toString()} state={post}>GetDetails</Button>
        </div>
    );
};

export {Post};
