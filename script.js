const dadosJogadores = {
    brasil: {
        titulo: "Brasil 🇧🇷",
        emoji: "🇧🇷",
        lista: [
            { n: "Arrascaeta", p: "Meio-Campista", num: "14", img: "arrascaeta.jpg" },
            { n: "Neymar Jr", p: "Atacante", num: "10", img: "neymar.jpg" },
            { n: "Vinícius Jr", p: "Atacante", num: "7", img: "vini.jpg" },
            { n: "Alex Sandro", p: "Lateral-Direito", num: "5", img: "alex.jpg" },
            { n: "Robinho", p: "Atacante", num: "11", img: "robinho.jpg" },
            { n: "Ronaldinho", p: "Meio-Campista", num: "10", img: "ronaldinho.jpg" },
            { n: "Emerson Royal", p: "Lateral Direito", num: "2", img: "royal.jpg" },
            { n: "Paqueta", p: "Meio-Campista", num: "8", img: "paqueta.jpg" },
            { n: "Zico", p: "Meio-Campista", num: "10", img: "zico.jpg" },
            { n: "Danilo", p: "Zagueiro", num: "4", img: "danilo.jpg" }
        ]
    },
    argentina: {
        titulo: "Argentina 🇦🇷",
        emoji: "🇦🇷",
        lista: [
            { n: "Messi", p: "Atacante", num: "10", img: "messi.jpg" },
            { n: "Di María", p: "Meio-Campista", num: "11", img: "maria.jpg" },
            { n: "Agüero", p: "Atacante", num: "19", img: "aguero.jpg" },
            { n: "Dybala", p: "Atacante", num: "21", img: "dybala.jpg" },
            { n: "L. Martínez", p: "Atacante", num: "22", img: "lautaro.jpg" },
            { n: "Maradona", p: "Meio-Campista", num: "10", img: "maradona.jpg" },
            { n: "Riquelme", p: "Meio-Campista", num: "10", img: "riquelme.jpg" },
            { n: "Mascherano", p: "Volante", num: "14", img: "mascherano.jpg" },
            { n: "Batistuta", p: "Atacante", num: "9", img: "batistuta.jpg" },
            { n: "Zanetti", p: "Lateral", num: "4", img: "zanetti.jpg" }
        ]
    },
    franca: {
        titulo: "França 🇫🇷",
        emoji: "🇫🇷",
        lista: [
            { n: "Mbappé", p: "Atacante", num: "7", img: "mbappe.jpg" },
            { n: "Griezmann", p: "Atacante", num: "7", img: "griezmann.jpg" },
            { n: "Kanté", p: "Volante", num: "13", img: "kante.jpg" },
            { n: "Benzema", p: "Atacante", num: "9", img: "benzema.jpg" },
            { n: "Pogba", p: "Meio-Campista", num: "6", img: "pogba.jpg" },
            { n: "Zidane", p: "Meio-Campista", num: "10", img: "zidane.jpg" },
            { n: "Henry", p: "Atacante", num: "12", img: "henry.jpg" },
            { n: "Ribéry", p: "Meio-Campista", num: "7", img: "ribery.jpg" },
            { n: "Vieira", p: "Volante", num: "4", img: "vieira.jpg" },
            { n: "Thuram", p: "Zagueiro", num: "15", img: "thuram.jpg" }
        ]
    },
    alemanha: {
        titulo: "Alemanha 🇩🇪",
        emoji: "🇩🇪",
        lista: [
            { n: "Müller", p: "Atacante", num: "25", img: "muller.jpg" },
            { n: "Neuer", p: "Goleiro", num: "1", img: "neuer.jpg" },
            { n: "Kroos", p: "Meio-Campista", num: "8", img: "kroos.jpg" },
            { n: "Kimmich", p: "Meio-Campista", num: "6", img: "kimmich.jpg" },
            { n: "Rüdiger", p: "Zagueiro", num: "2", img: "rudiger.jpg" },
            { n: "Özil", p: "Meio-Campista", num: "10", img: "ozil.jpg" },
            { n: "Schweinsteiger", p: "Meio-Campista", num: "7", img: "schweinsteiger.jpg" },
            { n: "Lahm", p: "Lateral Direito", num: "16", img: "lahm.jpg" },
            { n: "Klose", p: "Atacante", num: "11", img: "klose.jpg" },
            { n: "Matthäus", p: "Meio-Campista", num: "10", img: "matthaus.jpg" }
        ]
    }
};

const mainApp = document.querySelector("#app");

// Função para criar as seções e os cards
Object.keys(dadosJogadores).forEach(selecao => {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${dadosJogadores[selecao].titulo}</h2>`;
    
    const wrapper = document.createElement("div");
    wrapper.className = "cards-wrapper";
    
    dadosJogadores[selecao].lista.forEach(jogador => {
        wrapper.innerHTML += `
            <div class="card ${selecao}" onclick="changeBg(event)">
                <div class="bandeira">${dadosJogadores[selecao].emoji}</div>
                <div class="foto-container">
                    <img src="./assets/${jogador.img}" alt="${jogador.n}">
                </div>
                <div class="info">
                    <h1>${jogador.n}</h1>
                    <p>${jogador.p}</p>
                    <div class="numero">#${jogador.num}</div>
                </div>
            </div>
        `;
    });
    
    section.appendChild(wrapper);
    mainApp.appendChild(section);
});

// Função para mudar o fundo ao clicar (Efeito do Desafio)
function changeBg(event) {
    const card = event.currentTarget;
    const currentBg = card.style.backgroundImage;
    if (currentBg.includes("bg-ignite.svg")) {
        card.style.backgroundImage = "url(./assets/bg-explorer.svg)";
    } else {
        card.style.backgroundImage = "url(./assets/bg-ignite.svg)";
    }
}