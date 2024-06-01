export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  )
};

const NetflixSeries = () => {
  const name = "Queen"
  const summary = "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again."
  const returnGenre = () => {
    const Genre = "RomCom";
    return Genre
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
        <h4>Genre:{ returnGenre()}</h4>
      </div>
    </div>
  )
}

