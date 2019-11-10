// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

// • Formel für Menschen mit einem eher breiten Körperbau
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
let idealgewicht = {
  //-------------------//
  bulidHTML() {
    let form = `
    <form action="">
      <h2>Idealgewichtsrechner</h2>
      <label for="Körpergröße">Körpergröße</label>
      <input type="number" id="height"><br />
      <label for="Alter">Alter</label>
      <input type="number" id="alter"><br />
      <h2>Körperbau</h2>
      <label for="Breit">Breit</label>
      <input type="radio" name="radio" id="breit">
      <label for="Schmale">Schmale</label>
      <input type="radio" name="radio" id="schmale"><br />
      <input type="button" value="Rechnen" id="rechner">
      <h3 id="result"></h3>
    </form>`;
    document.write(`<div class="container">${form}</div>`);
    document.getElementById('rechner').addEventListener('click', this.rechnen);
    return;
  },
  //-------------------//
  rechnen() {
    height = document.getElementById('height');
    alter = document.getElementById('alter');
    result = document.getElementById('result');
    if (breit.checked && height.value > 0 && alter.value > 0) {
      breitt = height.value - 100 + (alter.value / 10) * 0.9 * 1.1;
      result.innerHTML = 'Dein Idealgewicht ist: ' + breitt.toFixed(2);
    } else if (schmale.checked && height.value > 0 && alter.value > 0) {
      schmal = height.value - 100 + (alter.value / 10) * 0.9 * 0.9;
      result.innerHTML = 'Dein Idealgewicht ist: ' + schmal.toFixed(2);
    } else {
      alert('Müssen Sie Ihr Körpergröße und Alter angeben');
    }
  }
};
idealgewicht.bulidHTML();
