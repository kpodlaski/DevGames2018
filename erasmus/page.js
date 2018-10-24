document.getElementById("div_1").style.color="#aabb12"

el = document.getElementsByClassName("red_text")
for (i =0; i< el.length; i++)
	el[i].style.color="red"

data = {
	"list_size":3,
	"list":[
		{"name" : "Joe", "age":23},
		{"name" : "Johana", "age":16},
		{"name" : "Alex", "age":74}
	]
}

function createTable(){	
	my_div = document.getElementById("div_1")
	table = document.createElement("table")
	for (i=0 ; i<data.list.length; i++){
		row = document.createElement("tr")
		col = document.createElement("td")
		col.innerHTML = data.list[i].name
		row.appendChild(col)
		col = document.createElement("td")
		col.innerHTML = data.list[i].age
		row.appendChild(col)
		table.appendChild(row)
	}
	my_div.appendChild(table)
	my_div.appendChild(table)
}

function addRow(){
	alert("Create a method")
}

//.getElementsByTagName()
//.getElementById()
//childNodes[]