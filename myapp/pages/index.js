import Head from "next/head";
import Link from 'next/link';
import Card from "../components/card";
import fetch from "isomorphic-unfetch";

function Home({
  positif,
  meninggal,
  sembuh,
  positifIndonesia,
  sembuhIndonesia,
  meninggalIndonesia,
}) {
  return (
    <React.Fragment>
      <Head>
        <title>Data Covid-19</title>
      </Head>
      <div className="container">
        <div className="wrapper">
          <div className="">
            <div className="row no-gutters">
              <div className="col-12 text-center">
                <h1 className="display-4">Data Covid-19</h1>
              </div>
            </div>
          </div>

          <main>
            <section className="py-2">
              <div className="row">
                <div className="col-12">
                  <h3>Seluruh Dunia</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Positif" value={positif} color="bg-warning"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Meninggal" value={meninggal} color="bg-danger"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Sembuh" value={sembuh} color="bg-success"></Card>
                </div>
              </div>
            </section>

            <section className="py-2">
              <div className="row">
                <div className="col-10">
                  <h3>Indonesia</h3>
                </div>
                <div className="col-2">
                  <Link href="/table">
                    <a>
                      <button type="button" className="btn btn-link">Lihat Tabel Provinsi</button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Positif" value={positifIndonesia} color="bg-warning"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Meninggal" value={meninggalIndonesia} color="bg-danger"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Sembuh" value={sembuhIndonesia} color="bg-success"></Card>
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer>
          Dibuat dengan API dari https://kawalcorona.com/api/
        </footer>
      </div>
    </React.Fragment>
  );
}

Home.getInitialProps = async ({ req }) => {
  try {
    console.log('fetching......')
    const resultPositif = await fetch("https://api.kawalcorona.com/positif");
    const resultSembuh = await fetch("https://api.kawalcorona.com/sembuh");
    const resultMeninggal = await fetch(
      "https://api.kawalcorona.com/meninggal"
    );
    const resultIndonesia = await fetch(
      "https://api.kawalcorona.com/indonesia"
    );
    const positif = await resultPositif.json();
    const sembuh = await resultSembuh.json();
    const meninggal = await resultMeninggal.json();
    const dataIndonesia = await resultIndonesia.json();
    return {
      positif: positif.value,
      sembuh: sembuh.value,
      meninggal: meninggal.value,
      positifIndonesia: dataIndonesia[0].positif,
      meninggalIndonesia: dataIndonesia[0].meninggal,
      sembuhIndonesia: dataIndonesia[0].sembuh,
    };
  } catch (error) {
    return error;
  }
};

export default Home;
