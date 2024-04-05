# belly-button-challenge
The purpose of this weekly module challenge was to create the Belly Button Biodiversity Dashboard, using the NC State Belly Button Biodiversity database (https://robdunnlab.com/projects/belly-button-biodiversity/) to create an interactive dashboard which displays information on the bacterial makeup of subjects' bellybuttons.

Javascript and HTML were used to create the code to deploy this webpage. The d3 javascript library was used to access and create visualizations from the json data. The interactive dashboard contains the following sections:

    1) The test subject ID dropdown menu: This can be used to change which test subject's data is displayed, updating all other portions of the webpage. The list of available subject ids are provided to the dropdown menu using d3.

    2) Test Subject Demographics: This shows an overview of the demographics for the test subject whose data is shown. The demographics are accessed from the metadata of the json data. 

    3) OTU bar chart: This displays the values of the ten most prevalent microbial species (referred to as OTUs) for the chosen subject. The chart is rendered using Plotly.

    4) OTU bubble chart: This displays a visual representation of all OTUs seen for the chosen subject. The size of the bubble is proportional to the prevalence of each OTU. The hovertext of the bubbles provides the species type and OTU value, and the color corresponds with the OTU ids. The chart is rendered using Plotly.

Sources used: Understanding 'this' function: https://www.w3schools.com/js/js_this.asp
creating the dropdown list: https://www.geeksforgeeks.org/how-to-create-a-dropdown-list-with-array-values-using-javascript/ and
https://stackoverflow.com/questions/20780835/putting-the-country-on-drop-down-list-using-d3-via-csv-file and https://www.tutorialsteacher.com/d3js/data-binding-in-d3js
Bubble Chart documentation: https://plotly.com/javascript/bubble-charts/
Converting string to integer: https://www.w3schools.com/JSREF/jsref_parseint.asp
converting a dictionary to an array-like object: https://stackoverflow.com/questions/42717081/using-dictionary-as-d3-data-source

Bootcamp spot Xpert learning assistant was also used for troubleshooting how to incorporate the list of ids into the dropdown list, as well as for creating the code used to loop through the metadata to display the key:value pairs.
Thank you to classmate Justyn Helgeson for additional help in populating the dropdown list!