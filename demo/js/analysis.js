d3.csv("/data/cities.csv", function(error,data) {
  console.log(data[0]);
});

d3.tsv("/data/animals.tsv", function(data) {
  console.log(data[0]);
});

d3.dsv("|", "text/plain")("/data/animals_piped.txt", function(data) {
  console.log(data[1]);
});

d3.json("/data/employees.json", function(data) {
  console.log(data[0]);
});

queue()
  .defer(d3.csv, "/data/cities.csv")
  .defer(d3.tsv, "/data/animals.tsv")
  .await(analyze);

function analyze(error, cities, animals) {
  if(error) { console.log(error); }
	
  console.log("Queue resolved.");

  console.log(cities[0]);
  console.log(animals[0]);
}