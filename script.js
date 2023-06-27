var names = new Array();
names[0] = "Aman";
names[1] = "Jack";
names[2] = "Sam";
names[3] = "Sun";
names[4] = "Joy";
names[5] = "Cary";
names[6] = "Jason";
names[7] = "Sam";
names[8] = "jam";
names[9] = "John";

for (var i = 0; i<names.length; i++) {
	if(names[i].charAt(0)=='J' || names[i].charAt(0)=='j'){
		console.log("Goodbye"  +  names[i]);
	}
	else{
		console.log("Hello"  +  names[i]);
	}
	
}