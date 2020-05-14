const API_POSITIF_URL = `https://api.kawalcorona.com/positif`
const API_MENINGGAL_URL = `https://api.kawalcorona.com/meninggal`
const API_SEMBUH_URL = `https://api.kawalcorona.com/sembuh`
const API_REKAP_INDONESIA_URL = 'https://api.kawalcorona.com/indonesia/'


async function getDataCovid19() {
    const resultPositif = await fetch(API_POSITIF_URL);
    const resultMeninggal = await fetch(API_MENINGGAL_URL);
    const resultSembuh = await fetch(API_SEMBUH_URL);
    
    const positif = await resultPositif.json();
    const meninggal = await resultMeninggal.json();
    const sembuh = await resultSembuh.json();

    return {
        positif,
        meninggal,
        sembuh,
    }
}

async function getDataCovid19Indonesia() {
    const response = await fetch(API_REKAP_INDONESIA_URL)
    const result = await response.json();

    return {
        result
    }
}


export {
    getDataCovid19,
    getDataCovid19Indonesia
}