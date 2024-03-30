// Read in the d3 library samples JSON
const samples_url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Use d3.json to read in the data
d3.json(samples_url).then(function(data) {
    console.log(data); // Check if the data loaded correctly

// save all available ids
let ids = data.names

// when subject id dropdown is changed, call function
d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged() {
    let dropdownMenu = d3.select("#selDataset");
    let choice = d3.select(this.ids);

// i need 'this' to be the chosen id value from the list of available ids

//access the "sample" portion of the json
let sample_data = data.samples

//sort by from biggest to smallest OTU based on sample value
let sortedSampleData = sample_data.sort((a, b) => b.sample_values - a.sample_values);

//Choose only the top 10 OTUs
let topTen = sortedSampleData.slice(0,10);

//console log to check that the top 10 were correctly selected
console.log(topTen);

//Set up trace for bar chart
trace1 = {
    x: topTen.sample_values,
    y: topTen.otu_ids,
    type: "bar",
    orientation: "h"
};

let barData = [trace1];

Plotly.newPlot("bar", barData);

console.log(id)

    }

});


