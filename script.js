const input = document.querySelector('#input');
const limpar = document.querySelector('#btn-limpar');
const copiar = document.querySelector('#btn-copiar');
const contador = document.querySelector('#contador');




copiar.addEventListener('click', function(){
	input.select();
   input.setSelectionRange(0, 99999); 
   document.execCommand('copy');
   alert('Texto copiado!');
});

limpar.addEventListener('click', function(){
	input.value = ' ';
	contador.innerText = '0/300';
	input.disabled = false;
	contador.classList.remove('text-red-600')
	contador.classList.add('text-gray-600')
	
})


function travarteclas () {
	input.disabled = true
	input.addEventListener("keydown", (e) => {e.preventDefault})
	input.addEventListener("paste", (e) => {e.preventDefault})
}


input.addEventListener('input', function(){
	const text = this.value;
	contador.innerText = text.length + '/300'; 

	if(text.length >= 300 ) { 
		alert("Mais de 300 caracteres!");
		contador.classList.remove('text-gray-600')
		contador.classList.add('text-red-600')
		
		travarteclas()

	} else {
		contador.classList.remove('text-red-600')
		contador.classList.add('text-gray-600')
	}

	
		
}); 