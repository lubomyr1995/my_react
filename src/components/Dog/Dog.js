const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog.name}
            <button onClick={() => dispatch({type: 'delDog', payload: {id: dog.id}})}>delete</button>
        </div>
    );
};

export {Dog};
