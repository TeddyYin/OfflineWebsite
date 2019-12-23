$(document).ready(function() {
	// In the following line, you should include the prefixes of implementations you want to test.
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	// DON'T use "var indexedDB = ..." if you're not in a function.
	// Moreover, you may need references to some window.IDB* objects:
	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
	// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
	
	if (!window.indexedDB) {
		window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
	}else{
		window.alert("IndexedDB running");
	}
	
	// // Let us open our database
	// var request = window.indexedDB.open("MyTestDatabase", 3);

	// var db;
	// var request = indexedDB.open("MyTestDatabase");
	// request.onerror = function(event) {
	  // alert("Why didn't you allow my web app to use IndexedDB?!");
	// };
	// request.onsuccess = function(event) {
	  // db = request.result;
	// };

	// This is what our customer data looks like.
	const customerData = [
	  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
	  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
	];
	const dbName = "NeoYin";
	
	var db;

	var request = indexedDB.open(dbName, 1);

	request.onerror = function(event) {
		window.alert("IndexedDB onerror IndexedDB.js");
	};
	request.onupgradeneeded = function(event) {
		db = event.target.result;

		// Create an objectStore to hold information about our customers. We're
		// going to use "ssn" as our key path because it's guaranteed to be
		// unique.
		var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

		// Create an index to search customers by name. We may have duplicates
		// so we can't use a unique index.
		objectStore.createIndex("name", "name", { unique: false });

		// Create an index to search customers by email. We want to ensure that
		// no two customers have the same email, so use a unique index.
		objectStore.createIndex("email", "email", { unique: true });

		// Store values in the newly created objectStore.
		for (var i in customerData) {
			objectStore.add(customerData[i]);
		}
		  
		// var db = event.target.result;

		// // Create another object store called "names" with the autoIncrement flag set as true.    
		objStore = db.createObjectStore("names", { autoIncrement : true });

		// Because the "names" object store has the key generator, the key for the name value is generated automatically.
		// The added records would be like:
		// key : 1 => value : "Bill"
		// key : 2 => value : "Donna"
		for (var i in customerData) {
			objStore.add(customerData[i].name);
		}
		
		console.log(db);
	};
});
