// your code here
document.querySelector("button").addEventListener("click",()=>{
	let name=document.querySelector("#name").value;
	let year=document.querySelector("#year").value;
	let update=`https://localhost:8080/?name=${name}&year=${year}`;
	document.querySelector("#url").innerHTML=update;
})