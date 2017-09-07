var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', function(){
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
	modal.style.display = 'none';
});

window.addEventListener('click', function(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
});
