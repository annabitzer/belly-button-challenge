// Read in the d3 library samples JSON
const samples_url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Use d3.json to read in the data
d3.json(samples_url).then(function(data) {
    console.log(data); // Check if the data loaded correctly

// save all available ids
let ids = data.names
console.log(ids)

//create a dropdown variable to provide the id options
let dropDown = d3.select("#selDataset");

//the following code was made using the following sources: https://stackoverflow.com/questions/20780835/putting-the-country-on-drop-down-list-using-d3-via-csv-file,
    //https://www.tutorialsteacher.com/d3js/data-binding-in-d3js, and BootcampSpot: Xpert Learning Assistant

//provide an array of ids to populate
dropDown.selectAll("option").data(ids).enter().append("option")
.attr("value", function(id) {return id; })
.text(function(id) {return id; });

function optionChanged() {
    //access the selected value from the dropdown menu
    let choice = dropDown.property("value");
    console.log("Selected value: ", choice);
}

// when subject id dropdown is changed, call function
dropDown.on("change", optionChanged);

});

// i need 'this' to be the chosen id value from the list of available ids

//access the "sample" portion of the json
//let sample_data = choice.samples

//sort by from biggest to smallest OTU based on sample value
//let sortedSampleData = sample_data.sort((a, b) => b.sample_values - a.sample_values);

//Choose only the top 10 OTUs
//let topTen = sortedSampleData.slice(0,10);

//console log to check that the top 10 were correctly selected
//console.log(topTen);

//Set up trace for bar chart
//trace1 = {
//    x: topTen.sample_values,
 //   y: topTen.otu_ids,
   // type: "bar",
    //orientation: "h"
//};

//let barData = [trace1];

//Plotly.newPlot("bar", barData);

//console.log(id)

    //}

//});


