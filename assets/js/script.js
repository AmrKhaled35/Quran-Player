const apiurl = "https://mp3quran.net/api/v3";
const endpoint = "reciters";
const lang = "ar";

async function getReciters() {
    const ChooseReciter = document.querySelector("#chooseReciter");
    const res = await fetch(`${apiurl}/${endpoint}?lang=${lang}`);
    const data = await res.json();
    console.log(data.reciters);
    data.reciters.forEach(reciter => {
        ChooseReciter.innerHTML += `<option value="${reciter.id}">${reciter.name}</option>`;
    });

    ChooseReciter.addEventListener("change", e => getMoshaf(e.target.value));
}

getReciters();

async function getMoshaf(reciterId) {
    const ChooseMoshaf = document.querySelector("#chooseMoshaf");
    const res = await fetch(`${apiurl}/${endpoint}?lang=${lang}&reciter=${reciterId}`);
    const data = await res.json();
    console.log(data.reciters[0].moshaf);
    const moshafs = data.reciters[0].moshaf;
        moshafs.forEach(moshaf => {
            ChooseMoshaf.innerHTML += `<option value="${moshaf.id}">${moshaf.name}</option>`;
        });
    
}
