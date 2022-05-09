const Car = ({car: {id, model, price, year}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
        </div>
    );
};

export {Car};
