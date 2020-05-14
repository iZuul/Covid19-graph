import Head from "next/head";
import Link from 'next/link';
import Card from "../components/card";
import React, { useState } from "react";
import { getDataCovid19, getDataCovid19Indonesia } from './api/data'

function Home({result, resultIndonesia}) {
  console.log(resultIndonesia)
  console.log(result)
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
                  <Link href="/graph">
                    <Card title="Positif" value={result.positif.value} color="bg-warning"></Card>
                  </Link>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Meninggal" value={result.meninggal.value} color="bg-danger"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Sembuh" value={result.sembuh.value} color="bg-success"></Card>
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
                  <Card title="Positif" value={resultIndonesia.positif} color="bg-warning"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Meninggal" value={resultIndonesia.meninggal} color="bg-danger"></Card>
                </div>
                <div className="col-12 col-md-4 card-wrapper">
                  <Card title="Sembuh" value={resultIndonesia.sembuh} color="bg-success"></Card>
                </div>
              </div>
            </section>
          </main>

          <footer className="text-center">
            Dibuat dengan API dari https://kawalcorona.com/api/
          </footer>
        </div>
      </div>
    </React.Fragment>
  )
}

export async function getServerSideProps () {
  const result = await getDataCovid19()
  const resultIndonesia = await getDataCovid19Indonesia()
  // console.log(result.positif);
  return {
    props: { 
      result,
      resultIndonesia : resultIndonesia.result[0]
    }
  }
}

export default Home;
