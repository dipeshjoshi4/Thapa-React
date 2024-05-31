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
  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot.jpg" width="60%" height="60%" />
      </div>

      <div>
        <h2>Name:Queen Of Tears</h2>
        <h3>Rating:8.2</h3>
        <p>The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again.</p>
      </div>
    </div>
  )
}

