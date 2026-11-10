const minuJson = [
    {
        Car: {
            Color: "Roosi roosa",
            "Tinted Windows": false,
            Istekohti: 4,
            "Pakiruumi maht": 50,
            Rattaid: 4,
            Lisavarustus: {"aknad": "soojendusega", "sisu": "nahkistmed"},
            Mark: "audi"
        }
    }
]
document.getElementById("app").innerHTML = `
<div id="json">
<h1> Auto omadused NYOMMM </h1>
<p>Värv: ${minuJson[0].Car.Color}</p>
<p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"]}</p>
<p>Istekohti: ${minuJson[0].Car["Istekohti"]}</p>
<p>Pakiruumi maht: ${minuJson[0].Car["Pakiruumi maht"]}
<p>Rattaid: ${minuJson[0].Car["Rattaid"]}</p>
<p>Lisavarustus: <ul><li>aknad: ${minuJson[0].Car.Lisavarustus["aknad"]}</li>
<li>sisu: ${minuJson[0].Car.Lisavarustus["sisu"]}</li></ul></p>
<p>Mark: ${minuJson[0].Car.Mark}</p>
</div>
`

