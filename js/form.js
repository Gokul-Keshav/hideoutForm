function addIndustry(){
	document.getElementById("extra").innerHTML = "<div class='row'><h4>Select destination and Industry </h4><div class='col-half'><div class='input-group'><select></select></div></div><div class='col-half'><div class='input-group'><select></select></div></div></div><div id='extra1'><center><button type='button' onclick='addIndustry1()' class='add'><i class='fa fa-plus'></i>  Add</button><button type='button' onclick='removeLast()' class='add'><i class='fa fa-close'></i>  Remove</button></center></div>";
}
function addIndustry1(){
document.getElementById("extra1").innerHTML = "<div class='row'><h4>Select destination and Industry </h4><div class='col-half'><div class='input-group'><select></select></div></div><div class='col-half'><div class='input-group'><select></select></div></div></div><div id='extra2'><center><button type='button' onclick='addIndustry2()' class='add'><i class='fa fa-plus'></i>  Add</button><button type='button' onclick='addIndustry()' class='add'><i class='fa fa-close'></i>  Remove</button></center></div>";
}
function addIndustry2(){
document.getElementById("extra2").innerHTML = "<div class='row'><h4>Select destination and Industry </h4><div class='col-half'><div class='input-group'><select></select></div></div><div class='col-half'><div class='input-group'><select></select></div></div></div><div id='extra3'><center><button type='button' onclick='addIndustry3()' class='add'><i class='fa fa-plus'></i>  Add</button><button type='button' onclick='addIndustry1()' class='add'><i class='fa fa-close'></i>  Remove</button></center></div>";
}
function addIndustry3(){
	var message = "You cannot add more than 5 industries";
document.getElementById("extra3").innerHTML = "<div class='row'><h4>Select destination and Industry </h4><div class='col-half'><div class='input-group'><select></select></div></div><div class='col-half'><div class='input-group'><select></select></div></div></div><div id='extra4'><center><button type='button' onclick='addIndustry2()' class='add'><i class='fa fa-close'></i>  Remove</button></center></div>";
}

function removeLast(){
	document.getElementById("extra").innerHTML = "<center><button type='button' onclick='addIndustry()' class='add'><i class='fa fa-plus'></i>  Add</button></center>";
}