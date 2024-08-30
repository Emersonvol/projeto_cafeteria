const coracoes = document.querySelectorAll(".bi-heart");
coracoes.forEach(coracao => {
  coracao.addEventListener('dblclick', (e) => {    
    coracao.classList.add('bi-heart-fill');
    coracao.classList.remove('bi-heart');
  });
  coracao.addEventListener('click', (e) => {    
    coracao.classList.add('bi-heart');
    coracao.classList.remove('bi-heart-fill');
  });
});

const galeria = document.querySelector(".galeria")
fetch("/projeto_cafeteria/fotos.json")
.then(fotos =>{ return fotos.json()})
.then((imagens)=>{
    imagens.map(imgs =>{
      galeria.innerHTML +=`<img src='${imgs.img}'/>`
    })
})



/*Menu*/

function MenuHambuguer(){
  let links= document.querySelector('.navbar')

    if(links.style.display === "none"){
      links.style.display = "block"
    }else{
      links.style.display  = "none"
    }
}









