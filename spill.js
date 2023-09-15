        // Generer et tilfeldig tall mellom 1 og 100
        const riktigTall = Math.floor(Math.random() * 100) + 1;
        let forsok = 0;

        // Opprett en meldingselement
        const melding = document.createElement("p");
        melding.textContent = "Jeg har valgt et tall mellom 1 og 100, gjett mitt tall";
        document.body.appendChild(melding);

        // Opprett en tekstboks for gjettet
        const gjettetTallInput = document.createElement("input");
        gjettetTallInput.type = "number";
        gjettetTallInput.placeholder = "Skriv inn ditt gjett";
        document.body.appendChild(gjettetTallInput);

        // Opprett en knapp for å gjette
        const gjettKnapp = document.createElement("button");
        gjettKnapp.textContent = "Gjett";
        gjettKnapp.addEventListener("click", sjekkGjett);
        document.body.appendChild(gjettKnapp);

        // Opprett en resultatliste
        const resultatListe = document.createElement("ul");
        document.body.appendChild(resultatListe);

        function sjekkGjett() {
            forsok++;
            const gjettetTall = parseInt(gjettetTallInput.value);
            const resultatElement = document.createElement("li");

            if (gjettetTall === riktigTall) {
                resultatElement.textContent = `Du gjettet ${gjettetTall}, det er riktig!!! Du brukte ${forsok} forsøk.`;
                gjettKnapp.disabled = true; // Deaktiver knappen etter riktig svar
            } else if (gjettetTall < riktigTall) {
                resultatElement.textContent = `Du gjettet ${gjettetTall}, det er for lavt. Prøv igjen.`;
            } else {
                resultatElement.textContent = `Du gjettet ${gjettetTall}, det er for høyt. Prøv igjen.`;
            }

            resultatListe.appendChild(resultatElement);
        }