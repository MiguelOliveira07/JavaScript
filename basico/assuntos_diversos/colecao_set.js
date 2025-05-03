const caixa = document.getElementById("caixa");

let musicas = new Set(["musica1", "musica_boa", "musica_meia_bomba"]);

musicas.add("Playlist_musicas_01");
musicas.add("Playlist_musicas_02");
musicas.add("Musicas_023");
musicas.add("Musicas_teste_93427");

musicas.delete("Playlist_musicas_01");
musicas.delete("Playlist_musicas_02");

musicas.forEach((el) => {
  caixa.innerHTML += el + "<br/>";
});

// for(let musica of musicas){
//     console.log(musica)
//     caixa.innerHTML+= musica + '<br/>'
// }
