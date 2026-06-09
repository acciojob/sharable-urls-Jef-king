// your code here
function printr(){
let x=document.getElementById('name').value.trim();
let y=document.getElementById('year').value.trim();
let r=document.querySelector('h3');
	if(x==''){
		r.textContent="https://localhost:8080/?year="+y;
		return;
	}else if(y==''){
		r.textContent="https://localhost:8080/?name="+x;
		return;
	}
	r.textContent="https://localhost:8080/?name="+x+"&year="+y;
}
