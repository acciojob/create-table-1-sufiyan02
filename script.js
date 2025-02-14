function insert_Row() {
    //Write your code here
  let val = document.getElementById("sampleTable");

	let nr = val.insertRow(0);
	
	let c1 = nr.insertCell(0);
	let c2 = nr.insertCell(1);
	
	 c1.textContent = "New Cell1";
	 c2.textContent = "New Cell2";
}
