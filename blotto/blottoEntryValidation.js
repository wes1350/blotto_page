

function runValidation(){
	console.log("VALIDATING!");
	document.getElementById("submissionbtn").disabled = true;
	if(validateR0()){
		document.getElementById("submissionbtn").disabled = false;
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
			break;
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
			break;
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