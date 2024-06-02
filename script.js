const input = document.querySelector('#input');
const limpar = document.querySelector('#btn-limpar');
const copiar = document.querySelector('#btn-copiar');
const contador = document.querySelector('#contador');


input.addEventListener('input', function(){
	const text = this.value;
	contador.innerText = text.length + '/300'; 
}); 

copiar.addEventListener('click', function(){
	input.select();
   input.setSelectionRange(0, 99999); 
   document.execCommand('copy');
   alert('Texto copiado!');
});

limpar.addEventListener('click', function(){
	input.value = ' ';
	contador.innerText = '0/300';
	
})