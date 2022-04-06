import './Flight.css'

export const Flight = ({item: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <div className={"flight"}>
            <div>
                <h4>{mission_name}</h4>
                <b>{launch_year}</b>
            </div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};