window.addEventListener('load', () => {
    document.getElementById('contenido').classList.add('efectLoad');
});



let boton = document.getElementById('icon');
let enlaces = document.getElementById('enlaces');
let contador = 0;

boton.addEventListener('click',function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
      enlaces.classList.remove('dos');
      enlaces.className = ('enlaces uno');
      contador = 0;
    }
})
