import Head from "next/head";
import Router from 'next/router'
import Link from 'next/link'
import {useState} from 'react'

function Table({data}) {
  const [search, setSearch] = useState('');

  const handleback = () => {
    console.log('clicked')
    Router.back();
  }

  const searchHandler = (event) => {
    console.log(event.target.value)
  }

  

  const filterTable = data.filter(item => {
    return item.attributes.Provinsi.toLowerCase().includes( search.toLowerCase() );
  })

  const dataTable = filterTable.map((item) => {
    const province = item.attributes
    return (
      <tr key={province.Kode_Provi}>
        <th scope="row">{province.Provinsi}</th>
        <td className="text-warning font-weight-bold">{province.Kasus_Posi}</td>
        <td className="text-danger font-weight-bold">{province.Kasus_Meni}</td>
        <td className="text-success font-weight-bold">{province.Kasus_Semb}</td>
      </tr>
    )
  })
    

  return (
    <React.Fragment>
      <Head>
        <title>Data Covid-19</title>
      </Head>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4">Tabel Data Covid-19 Indonesia</h1>
            </div>
          </div>
          <div className="row no-gutters py-4">
            <div className="col-6">
              <Link href="/">
                <a>
                  <button type="button" className="btn btn-secondary">Kembali</button>
                </a>
              </Link>
            </div>
            <div className="col-6 text-right">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            </div>
          </div>
          <section className="table-wrapper">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Povinisi</th>
                  <th scope="col">Positif</th>
                  <th scope="col">Meninggal</th>
                  <th scope="col">Sembuh</th>
                </tr>
              </thead>
              <tbody>
                {dataTable}
              </tbody>
            </table> 
          </section>

          <footer className="text-center">
            Dibuat dengan API dari https://kawalcorona.com/api/
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps ()  {
  const URL = `https://api.kawalcorona.com/indonesia/provinsi/`
  const res = await fetch(URL);
  const json = await res.json();
  return { 
    props:{
      data: json
    }
  };
};


export default Table;
