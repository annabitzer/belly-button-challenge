// Read in the d3 library samples JSON
const samples_url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Use d3.json to read in the data
dataAccess = d3.json(samples_url)

//populate dropdown menu and populate charts with results from an id
function dropDownMenu() {
//create a dropdown variable to provide the id options
    let dropDown = d3.select("#selDataset");
// when subject id dropdown is changed, call function
    d3.selectAll("#selDataset").on("change", optionChanged);

    // save all available ids
    dataAccess.then((data) => {
    let ids = data.names

    //the following code was made using the following sources: https://stackoverflow.com/questions/20780835/putting-the-country-on-drop-down-list-using-d3-via-csv-file,
        //https://www.tutorialsteacher.com/d3js/data-binding-in-d3js, BootcampSpot: Xpert Learning Assistant, and help from classmate Justyn Helgeson.

    //provide an array of ids to populate
    ids.forEach(id => {
        dropDown.append("option")
        .property('value', id)
        .text(id);
        });

    //select results from first id
    let id = ids[0];

    console.log(id);

    //default display visuals with first selected id
     barChart(id);
    //bubbleChart(id);
    //metaData(id);
    });
}

//create bar chart function
function barChart(choice) {
    
    //filter to only the data from the chosen id
    let testSubject = dataAccess.filter(data.samples == choice)

    //sort by from biggest to smallest OTU based on sample value
    let sortedSampleData = testSubject.sort((a, b) => b.sample_values - a.sample_values);

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

    Plotly.updatePlot("bar", barData);
    }

//create bubble chart function

//create metadata function

//create optionChanged to run whenever the chosen id is changed
    function optionChanged(choice) {
    barChart(choice);
    //bubbleChart(choice);
    //metaData(choice);
    }



