const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch({type: 'delCat', payload: {id: cat.id}})}>delete</button>
        </div>
    );
};

export {Cat};
