// your code here
function printr(){
let x=document.getElementById('name').value;
let y=document.getElementById('year').value;
let r=document.querySelector('h3');
	r.textContent=r.textContent+"?name="+x+"&year="+y;
}
