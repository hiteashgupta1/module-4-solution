var name = new Array();
name[0] = "Aman";
name[1] = "Jack";
name[2] = "Sam";
name[3] = "Sun";
name[4] = "Joy";
name[5] = "Cary";
name[6] = "Jason";
name[7] = "Sam";
name[8] = "jam";
name[9] = "John";

for (var i = 0; i<name.length; i++) {
	if (name[i].charAt(0)=='J' || name[i].charAt(0)=='j') {
		console.log("Goodbye" + name[i])
	}
	else{
		console.log("Hello" + name[i])
	}
	
}