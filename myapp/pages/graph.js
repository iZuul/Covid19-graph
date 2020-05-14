import Head from "next/head";

function Graph() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Grafik Data Covid-19 Indonesia</h1>
          </div>
        </div>
        <section>
          <div className="row py-4">
            <div className="col-4 text-center">
              <button type="button" className="btn btn-warning">Positif</button>
            </div>
            <div className="col-4 text-center">
              <button type="button" className="btn btn-danger">Meninggal</button>
            </div>
            <div className="col-4 text-center">
              <button type="button" className="btn btn-success">Sembuh</button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Graph;
