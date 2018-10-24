//alert("Hello")

data = {
	"list_name":"employees",
	"list":
	[
		{ name : "Alan", "age":22},
		{ "name" : "Evenlyn", "age":18},
		{ "name" : "Johnatan", "age":32},
		{ "name" : "Miriam", "age":25},
	]
}
data.size=4;

function addElement(){
	tab = document.getElementById("empl_tab")
	row = document.createElement("tr");
	cell = document.createElement("td");
	cell.innerHTML="Jane Doe";	
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.innerHTML='xxx';
	row.appendChild(cell);
	tab.appendChild(row);
}

function deleteRow(row_id){
	alert(row_id);
	tab = document.getElementById("empl_tab");
	tab.removeChild(tab.childNodes[row_id]);
}


dv = document.getElementById("divek");
dv.style.color="blue";
document.getElementsByClassName("red_element")[0]
		.style.color="#ff0000";
		
dv.innerHTML= "<b>Ala ma kota</b>";
table = document.createElement("table");
table.border=1
dim = 10
for (i=1; i<=dim; i++){
	row = document.createElement("tr");
	for (j=1; j<=dim;j++){
		cell = document.createElement("td");
		cell.innerHTML=i*j;
		row.appendChild(cell);
	}
	table.appendChild(row);
}
dv.appendChild(table);
//alert(data.list.length)
//alert(JSON.stringify(data.list));
dv = document.getElementById("employees")
table = document.createElement("table");
table.id="empl_tab";
for (i=0; i<data.list.length; i++){
	elem = data.list[i];
	console.log(JSON.stringify(elem))
	row = document.createElement("tr");
	cell = document.createElement("td");
	cell.innerHTML=elem.name;	
	row.appendChild(cell);
	cell = document.createElement("td");
	cell.innerHTML=elem.age;
	row.appendChild(cell);
	cell = document.createElement("td");
	bt = document.createElement("button");
	let x =i
	bt.addEventListener("click",function(){
		deleteRow(x)
	});
	bt.innerHTML = "-";
	cell.appendChild(bt);
	row.appendChild(cell);
	table.appendChild(row);
}

dv.appendChild(table);



bt = document.createElement("button")
bt.addEventListener("click",addElement);
bt.innerHTML = "Add";
dv.appendChild(bt);

