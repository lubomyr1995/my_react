import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <h2>{id}) {name}</h2>
            <Button to={id.toString()} state={user}>Get Details</Button>
        </div>
    );
};

export {User};
