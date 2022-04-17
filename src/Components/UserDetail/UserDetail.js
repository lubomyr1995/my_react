import {Button} from "../Button/Button";

const UserDetail = ({user}) => {
    const {id, name, username, email, address:{street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company} = user;
    return (
        <div>
            <h4>{id}) {name} {username}</h4>
            <p>email: {email}</p>
            <ul>Address:
                <ol>street: {street}</ol>
                <ol>suite: {suite}</ol>
                <ol>city: {city}</ol>
                <ol>zipcode: {zipcode}</ol>
                <ul>
                    GEO:
                    <ol>lat: {lat}</ol>
                    <ol>lng: {lng}</ol>
                </ul>
            </ul>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <ul>company:
                <ol>name: {company.name}</ol>
                <ol>catchPhrase: {company.catchPhrase}</ol>
                <ol>bs: {company.bs}</ol>
            </ul>
            <Button to={`posts?userId=${id}`} state={user}>GetPosts</Button>
        </div>
    );
};


export {UserDetail};
