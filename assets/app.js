// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus (fatelo):
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({ //struttura inziale
    el:'#app', //prefisso
    data:{ // qua inserisco i data che necessito
        messaggio:'🥳Hello Vue🥳 Davide ti da il Benvenuto ma ti aspetto cosi😡', //messaggio😅
        img: 'https://multiplayer.net-cdn.it/thumbs/images/2020/01/17/goku-ultra-istinto_jpg_1400x0_q85.jpg' // data per inserire l'immagine nel <img>
    }
})