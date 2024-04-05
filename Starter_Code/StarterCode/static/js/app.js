// Read in the d3 library samples JSON
const samples_url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Use d3.json to read in the data
dataAccess = d3.json(samples_url)
    console.log(dataAccess)

//populate dropdown menu and populate charts with results from an id
function dropDownMenu() {
//create a dropdown variable to provide the id options
    let dropDown = d3.select("#selDataset");

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
     bubbleChart(id);
     metaData(id);
    });
}

//create bar chart function
function barChart(id) {
    
    dataAccess.then(data => {

        //filter to only the data from the chosen id
        filteredData = data.samples.filter(sample => sample.id === id);
        console.log(filteredData);

        //sort by from biggest to smallest OTU based on sample value
        sortedSampleData = filteredData.sort((a, b) => b.sample_values - a.sample_values);
        console.log(sortedSampleData[0]);

        //Choose only the top 10 OTUs
        topTen = sortedSampleData[0].sample_values.slice(0, 10);
        console.log(topTen)


        //Set up trace for bar chart
        let trace1 = {
            x: topTen,
            y: sortedSampleData[0].otu_ids,
            text: sortedSampleData[0].otu_labels,
            type: "bar",
            orientation: "h"
                };
 
        let barData = [trace1];
 
        Plotly.newPlot("bar", barData);
    });

}


//create bubble chart function
function bubbleChart(id) {

    dataAccess.then(data => {
        //filter to only the data from the chosen id
        testSubject = data.samples.filter(sample => sample.id === id);
        console.log(testSubject[0])

        //set up trace for bubble chart
        trace1 = {
            x: testSubject[0].otu_ids,
            y: testSubject[0].sample_values,
            text: testSubject[0].otu_labels,
            mode: "markers",
            marker:{
                size: testSubject[0].sample_values,
                color: testSubject[0].otu_ids
            }
        };

        let bubbleData = [trace1];

        Plotly.newPlot("bubble", bubbleData);
    });
}

//create metadata function
function metaData(id) {
    dataAccess.then(data => {

        //the test subject ids are strings, but the metadata ids are integers. Convert id to an integer.
        let numId = parseInt(id, 10);

        // Filter to only the metadata from the chosen id
        subjectMetaData = data.metadata.filter(sample => sample.id === numId);
        console.log(subjectMetaData);

        //clear existing metadata
        d3.select('#sample-metadata').html();

        Object.entries(subjectMetaData[0]).forEach(([key, value]) => {
            d3.select('#sample-metadata').append('p').text(`${key}: ${value}`);
        });

    });
}
// when subject id dropdown is changed, call function
d3.selectAll("#selDataset").on("change", optionChanged);

//create optionChanged to run whenever the chosen id is changed
    function optionChanged(id) {
    barChart(id);
    bubbleChart(id);
    metaData(id);
    }

dropDownMenu();