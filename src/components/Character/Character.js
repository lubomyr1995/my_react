import css from './Character.module.css';

const Character = ({character: {name, status, species, image}}) => {
    return (
        <div className={css.character}>
            <h1>name: {name}</h1>
            <h2>status: {status}</h2>
            <p>species: {species}</p>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};
