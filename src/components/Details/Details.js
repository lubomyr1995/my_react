export const Details = ({item: {name, username, email, phone}}) => {
    return (
        <div>
            <h2>{name}</h2>
            <b>surname: {username}, </b>
            <b>phone: {phone}, </b>
            <b>e-mail: {email}</b>
            <hr/>
            <hr/>
        </div>
    );
};