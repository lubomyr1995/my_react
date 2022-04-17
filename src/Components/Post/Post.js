import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post}) => {
    let {id, title} = post;
    return (
        <div>
            <p><b>{id}</b>) {title}</p>
            {/*<Link to={id.toString()} state={post}>GetDetails</Link>*/}
            <Button to={id.toString()} state={post}>GetPosDetail</Button>
        </div>
    );
};

export {Post};
