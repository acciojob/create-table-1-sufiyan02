function insert_Row() {
    //Write your code here
  let val = document.getElementByID("sample Table");

	let nr = table.insertRow(0);
	let c1 = nr.insertCell(0);
	let c2 = nr.insertCell(1);
	
	 c1.innerHtml = "New Cell1";
	 c2.innerHtml = "New Cell2"
  
}
