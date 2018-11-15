

function runValidation(rd){
	console.log("VALIDATING!");
	document.getElementById("submissionbtn").disabled = true;
	
	if(rd == 0){
		if(validateR0()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
	else if(rd == 1){
		if(validateR1()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
	else if(rd == 2){
		if(validateR2()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
	else if(rd == 3){
		if(validateR3()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
	else if(rd == 4){
		if(validateR4()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
	else if (rd == 5){
		if(validateR5()){
			document.getElementById("submissionbtn").disabled = false;
		}
	}
}

/*
Conditions: 
- 100 soldiers over 5 fields
- soldier #s nonincreasing
*/
function validateR0(){
	
	passChecks = true;
	
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		passChecks = false;
	}
	
	// Soldier Check
	
	validFields = true;
	numFields = 5;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			validFields = false; 
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				validFields = false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			validFields = false;
		}
	}
	
	if (validFields){
		document.getElementById("fieldValidity").style.color = "#000000";
	}
	else{
		document.getElementById("fieldValidity").style.color = "#FF0000";
	}
	passChecks = passChecks && validFields;	
	
	// Check number of soldiers
	
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	document.getElementById("fieldSum").innerHTML = "Current sum: " + soldierSum;
	
	
	if(soldierSum != 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		passChecks = false; 
		document.getElementById("soldierCount").style.color = "#FF0000";
	}
	else{
		document.getElementById("soldierCount").style.color = "#000000";
	}
	
	// Check nonincreasing soldier condition
	if(validFields){	
		for(i = 0; i < numFields; i++){
			console.log(soldierNums[i], i);
			if (soldierNums[i+1] > soldierNums[i]){
				console.log("FAILED NONINCREASING CHECK!");
				passChecks = false;
				document.getElementById("fieldOrder").style.color = "#FF0000";
				break;
			}
			// set black if all good
			if (i == numFields - 1){
				document.getElementById("fieldOrder").style.color = "#000000";
			}
		}
	}
	else{
		document.getElementById("fieldOrder").style.color = "#FF0000";
	}
		
	if (passChecks){
		// passed all the checks!
		console.log("PASSED ALL CHECKS!");
	}
	
	return passChecks;
}

/*
* Conditions:
* up to 100 soldiers
* first 50 free, next 25 cost 1/2, next 25 cost 1
* 5 fields, worth 20-25-30-35-40
*/
function validateR1(){
	
	passChecks = true;
	
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		passChecks = false;
	}
	
	// Soldier Check
	
	validFields = true;
	numFields = 5;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			validFields = false; 
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				validFields = false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			validFields = false;
		}
	}
	
	if (validFields){
		document.getElementById("fieldValidity").style.color = "#000000";
	}
	else{
		document.getElementById("fieldValidity").style.color = "#FF0000";
	}
	passChecks = passChecks && validFields;
	
	
	// Check number of soldiers
	
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	document.getElementById("fieldSum").innerHTML = "Remaining soldiers: " + (100 - soldierSum);
	
	if(soldierSum > 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		passChecks = false; 
		document.getElementById("soldierCount").style.color = "#FF0000";
	}
	else{
		document.getElementById("soldierCount").style.color = "#000000";
	}
		
	if (passChecks){
		// passed all the checks!
		console.log("PASSED ALL CHECKS!");
	}
	
	return passChecks;
}

/*
* Conditions:
* win (fields you win + 1/2 fields you tie)^2 points
* 7 fields, soldiers nonincreasing, 100 soldiers
*/
function validateR2(){
	
	passChecks = true;
	
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		passChecks = false;
	}
	
	// Soldier Check
	
	validFields = true;
	numFields = 7;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			validFields = false; 
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				validFields = false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			validFields = false;
		}
	}
	
	if (validFields){
		document.getElementById("fieldValidity").style.color = "#000000";
	}
	else{
		document.getElementById("fieldValidity").style.color = "#FF0000";
	}
	passChecks = passChecks && validFields;
	
	
	// Check number of soldiers
	
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	document.getElementById("fieldSum").innerHTML = "Remaining soldiers: " + (100 - soldierSum);
	
	if(soldierSum != 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		passChecks = false; 
		document.getElementById("soldierCount").style.color = "#FF0000";
	}
	else{
		document.getElementById("soldierCount").style.color = "#000000";
	}
	
	// Check nonincreasing soldier condition
	if(validFields){	
		for(i = 0; i < numFields; i++){
			console.log(soldierNums[i], i);
			if (soldierNums[i+1] > soldierNums[i]){
				console.log("FAILED NONINCREASING CHECK!");
				passChecks = false;
				document.getElementById("fieldOrder").style.color = "#FF0000";
				break;
			}
			// set black if all good
			if (i == numFields - 1){
				document.getElementById("fieldOrder").style.color = "#000000";
			}
		}
	}
	else{
		document.getElementById("fieldOrder").style.color = "#FF0000";
	}
		
	if (passChecks){
		// passed all the checks!
		console.log("PASSED ALL CHECKS!");
	}
	
	return passChecks;
}

/*
* Conditions:
* transportation costs: to send soldiers to a field, pay 1, but can send any number of soldiers after paying 1
* 10 fields, soldiers nonincreasing, 100 soldiers
* Each field worth 3. Playing 0 on a field means you get 0 points on that field even on ties.
*/
function validateR3(){
	
	passChecks = true;
	
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		passChecks = false;
	}
	
	// Soldier Check
	
	validFields = true;
	numFields = 10;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			validFields = false; 
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				validFields = false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			validFields = false;
		}
	}
	
	if (validFields){
		document.getElementById("fieldValidity").style.color = "#000000";
	}
	else{
		document.getElementById("fieldValidity").style.color = "#FF0000";
	}
	passChecks = passChecks && validFields;
	
	
	// Check number of soldiers
	
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	document.getElementById("fieldSum").innerHTML = "Remaining soldiers: " + (100 - soldierSum);
	
	if(soldierSum != 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		passChecks = false; 
		document.getElementById("soldierCount").style.color = "#FF0000";
	}
	else{
		document.getElementById("soldierCount").style.color = "#000000";
	}
	
	// Check nonincreasing soldier condition
	if(validFields){	
		for(i = 0; i < numFields; i++){
			console.log(soldierNums[i], i);
			if (soldierNums[i+1] > soldierNums[i]){
				console.log("FAILED NONINCREASING CHECK!");
				passChecks = false;
				document.getElementById("fieldOrder").style.color = "#FF0000";
				break;
			}
			// set black if all good
			if (i == numFields - 1){
				document.getElementById("fieldOrder").style.color = "#000000";
			}
		}
	}
	else{
		document.getElementById("fieldOrder").style.color = "#FF0000";
	}
		
	if (passChecks){
		// passed all the checks!
		console.log("PASSED ALL CHECKS!");
	}
	
	return passChecks;
}

/*
* Conditions:
* defectors: if soldiers are outnumbered at least 2x, they defect to their opponent on the next field
* 6 fields worth 5-6-7-8-9-10, 100 soldiers
*/
function validateR4(){
	
	passChecks = true;
	
	// Name Check
	if(typeof document.getElementById("name").value != "string" || document.getElementById("name").value == ""){
		console.log("NAME IS EMPTY OR NOT A STRING!");
		passChecks = false;
	}
	
	// Soldier Check
	
	validFields = true;
	numFields = 6;
	soldierNums = [];
	for(i = 1; i <= numFields; i++){
		
		// refuse blank entries
		if(document.getElementById("f" + i).value == ""){
			console.log("FAILED EMPTINESS CHECK!");
			validFields = false; 
		} 
		
		entry = Number(document.getElementById("f" + i).value);
		
		if(typeof entry == "number"){
			if(!Number.isInteger(entry) || entry < 0){
				console.log("FAILED INTEGER OR NEGATIVE CHECKS!");
				validFields = false;
			}
			soldierNums.push(entry);
		}
		else{
			console.log("FAILED NUMBER CHECK!");
			validFields = false;
		}
	}
	
	if (validFields){
		document.getElementById("fieldValidity").style.color = "#000000";
	}
	else{
		document.getElementById("fieldValidity").style.color = "#FF0000";
	}
	passChecks = passChecks && validFields;
	
	
	// Check number of soldiers
	
	
	soldierSum = soldierNums.reduce((a, b) => a + b, 0);
	
	document.getElementById("fieldSum").innerHTML = "Remaining soldiers: " + (100 - soldierSum);
	
	if(soldierSum != 100){
		console.log("FAILED SOLDIER SUM CHECK!");
		passChecks = false; 
		document.getElementById("soldierCount").style.color = "#FF0000";
	}
	else{
		document.getElementById("soldierCount").style.color = "#000000";
	}
	
		
	if (passChecks){
		// passed all the checks!
		console.log("PASSED ALL CHECKS!");
	}
	
	return passChecks;
}