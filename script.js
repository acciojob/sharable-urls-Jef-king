// your code here
document.querySelector("button").addEventListener("click",()=>{
	let name=document.querySelector("#name").value.trim();
	let year=document.querySelector("#year").value.trim();
	let update='';
	if(name!=''&&year!=''){
	update=`https://localhost:8080/?name=${name}&year=${year}`;
	}else if(name!=''){
			update=`https://localhost:8080/?name=${name}`;
	}else if(year!=''){
			update=`https://localhost:8080/?year=${year}`;
	}else {
			update=`https://localhost:8080/`;

	}
	document.querySelector("#url").innerHTML=update;
})