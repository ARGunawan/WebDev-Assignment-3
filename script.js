let numRows = 0;
let numCols = 0;
let colorSelected;

function selcted(){
	colorSelected = document.getElementById("selctedID").value;
	console.log(colorSelected);
}

//adding the addR() function
//done by Caitlin-Dawn Sangcap
function addR() 
{
	var table = document.getElementById("grid");
	let row = document.createElement("TR");
	var cell = document.createElement("TD");
	row.append(cell);
	table.append(row);
	numRows++;
	//checking that the rows were being added
	console.log("clicked add row", numRows);
}

//adding the fill() function
//done by James Yoo
function fill()
{
	let original_box= document.getElementById("grid");	//access the grid
	let trs=original_box.getElementsByTagName("tr");	//get all the elements of tr
	
	for (let i=0; i<numRows; i++)						//loop through to go through tows and columns
	{
		let tds= trs[i].getElementsByTagName("td");		//to access the columns of the boxes in each row
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor=colorSelected; //change color to color Selected
		}
	}
}

//clearAll() function
//done by James Yoo
function clearAll()
{
	let original_box= document.getElementById("grid");	//access the grid
	let trs=original_box.getElementsByTagName("tr");	//get all the elements of tr
	
	for (let i=0; i<numRows; i++)						//loop through the rows and columns
	{
		let tds= trs[i].getElementsByTagName("td");		//to access the columns of the boxes in each row
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor="white";		//reset the color to white.
		}
	}
}

/****************************************************************************************/
//removeR method removes the last row of the grid
// created by: Ifte Ahmed
function removeR(){ 
	//rows is a list of the TR elements that exist on the page
	let rows = document.getElementById('grid').getElementsByTagName("TR");
	if(rows.length == 0){ //edge case if there are no rows to remove
		alert("no more rows to remove, add some if you like")
	}else{	
		rows[rows.length-1].remove();//gets the last row in the list of rows to remove
		numRows--;//decrease global counter
	}
}//end of removeR method
/****************************************************************************************/

/****************************************************************************************/
//removeR method removes the last column for the grid
// created by: Ifte Ahmed
function removeC(){ 
	//rows is a list of the TR elements that exist on the page
	let rows = document.getElementById('grid').getElementsByTagName("TR");
	for(let i =0;i<rows.length;i++){
		let cols = rows[i].getElementsByTagName("TD");//gets list of all the columns per row
		if(cols.length == 0){ //if no colums send alert
			alert("no more columns to delete, add some if you like");
		}else{
			cols[cols.length-1].remove(); //remove last column
			numCols--; //decrease global counter
		}
	}
}//end of removeC method
/****************************************************************************************/