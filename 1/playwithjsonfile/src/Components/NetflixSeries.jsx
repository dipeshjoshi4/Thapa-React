
import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {
    return (
        <ul>
            {
                seriesData.map((curElem)=>{
                    return(
                        <li key={curElem.id}>
                            <div><img src={curElem.img_url} alt="{curElem.name}" height="60%" width="62%" /></div>

                            <div>
                                <h1>Title: { }</h1>
                                <p>Rating: { }</p>
                                <h4>Genre:{curElem.genre}</h4>
                                <p>Cast:{curElem.cast}</p>
                                <a href={curElem.watch_url} target="_blank">
                                    <button>Watch Now</button>
                                </a>
                            </div>

                        </li>
                    )
                })
            }

        </ul>
    )
}