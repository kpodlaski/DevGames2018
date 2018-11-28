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
		let row = document.createElement("tr")
		col = document.createElement("td")
		col.innerHTML = data.list[i].name
		row.appendChild(col)
		col = document.createElement("td")
		col.innerHTML = data.list[i].age
		row.appendChild(col)
		col = document.createElement("td")
		minus_btn = document.createElement("button")
		minus_btn.innerHTML = "-"
		minus_btn.addEventListener("click", function(){
			table.removeChild(row)
		})
		col.appendChild(minus_btn)
		row.appendChild(col)
		row.appendChild(col)
		table.appendChild(row)
	}
	my_div.appendChild(table)
	my_div.appendChild(table)
}

function addRow(){
	my_div = document.getElementById("div_1")
	tab = my_div.getElementsByTagName("table")
	alert(tab[0].childNodes.length)
	row = document.createElement("tr")
	col = document.createElement("td")
	col.innerHTML = "Jane Doe"
	row.appendChild(col)
	col = document.createElement("td")
	col.innerHTML = 122
	row.appendChild(col)
	tab[0].appendChild(row)
}

document.getElementById("plus_btn")
		.addEventListener("click",function(){
			addRow()
		})

//.getElementsByTagName()
//.getElementById()
//childNodes[]