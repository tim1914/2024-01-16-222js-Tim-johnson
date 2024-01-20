
# Chapter 10: Lab 4 Use of Promise data

## Objectives

* Use Promise notation

1. In your Ch10 folder, create a copy of your file 3-json.html and call it 4-promise.html. You can do this by right-clicking and choosing copy - and then choosing paste and right-clicking to rename this copy file to 4-promise.html

1. Update the getBands function to use the Fetch API instead of the XMLHttpRequest. The FetchAPI is much simpler and uses promises. Frist to get the response, then convert from JSON, then passing off to populateBandsDiv.

    ![Open in Preview mode to see images](../screenshots/10-4-use-fetch.png)

1. Open the code in the browser. Click the button and you should see the results - though having the unknowns.

    ![Open in Preview mode to see images](../screenshots/10-3-2-output.png)


1. You can update the call to Fetch to first get the response as plain text - then using JSON.parse with reviver, as shown:

    ![Open in Preview mode to see images](../screenshots/10-4-use-fetch-with-reviver.png)


1. Refresh your browser and hit the button again. Note the improved output.

    ![Open in Preview mode to see images](../screenshots/10-3-4-unkown.png)

1. Mark your work as complete (online spreadsheet or in-class name tent card).
