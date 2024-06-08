export const SeriesCard = ({data}) => {

    const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

    return (
        <li>
            <div>
                <img src={img_url} alt={name} width="60%" height="60%" />
            </div>

            <div>
                <h2>Name:{name}</h2>
                <h3>Rating:{rating}</h3>
                <p>{description}</p>
                <h4>Genre:{genre}</h4>
                <p>Cast:{cast}</p>
                <a href={watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </li>
    )
}