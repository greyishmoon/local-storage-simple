// JavaScript Document
function init() {
	
	// window.localStorage.clear();
	
	window.localStorage.setItem("keys","car keys");
	window.localStorage.setItem("pen","blue");
    window.localStorage.setItem("mobile","moto X");
	
	var val1 = window.localStorage.getItem("keys");
	var val2 = window.localStorage.getItem("pen");
    var val3 = window.localStorage.getItem("mobile");
	
	$("#val1").text("Value for \"keys\": " + val1);
	$("#val2").text("Value for \"pen\": " + val2);
    $("#val3").text("Value for \"mobile\": " + val3);
	
	$("#size").text("# stored values: " + window.localStorage.length);
	
	
	
	var address = [
	
	{
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	},
	{
		"firstName": "Maggie",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}, 
	{
		"firstName": "Bart",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}
	]
	
	
	window.localStorage.setItem("simpson", JSON.stringify(address)); 
	var simpsons =JSON.parse(window.localStorage.getItem("simpson")); 
	
    $("#size2").text("# stored values: " + window.localStorage.length);
	
	var output = '';
		$.each(simpsons, function (index, value) {
    		output += '<li>' + value.firstName + " " + value.lastName + ", from: " + value.address.city + '</li>';
		});
	
	$('#simpsons').html(output).listview("refresh");
	
	
	var db = window.openDatabase("food", 1.0, "food database", 1024 * 1024);
	db.transaction(createTable, error, success);
	
	function createTable(tx) {	
  		tx.executeSql("CREATE TABLE IF NOT EXISTS food(id UNIQUE, title TEXT)");
	}
	
	function success() {
		db.transaction(addFood, error);
	}
	
	function addFood(tx) {
		tx.executeSql("INSERT INTO food(id, title) VALUES (1, 'chips')");
		tx.executeSql("INSERT INTO food(id, title) VALUES (2, 'cake')");
		tx.executeSql("INSERT INTO food(id, title) VALUES (3, 'nachos')");
	}
	
	function error(err) {
		alert("oops something went wrong " + err.message);
	}
	
}