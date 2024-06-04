export const NetflixSeries = () => {
    const name = "Queen"
    const summary = "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom."
    const returnGenre = () => {
        const Genre = "RomComG";
        return Genre
    }
    let age = 15;
    const canWatch = () => {
        if (age >= 18) return "WatchNow";
        return "Not Avialble"
    }


    return (
        <div>
            <div>
                <img src="qot.jpg" alt="qot.jpg" width="60%" height="60%" />
            </div>

            <div>
                <h2>Name:{name}</h2>
                <h3>Rating:{5 + 4}</h3>
                <p>{summary}</p>
                <h4>Genre:{returnGenre()}</h4>
                <button>{age >= 18 ? "Watch Now" : "Not Availble"}</button>
            </div>
        </div>
    )
}

export const Footer = () => {
    return (
        <>
            <h1>Copyrighr@d1</h1>
        </>
    )
}