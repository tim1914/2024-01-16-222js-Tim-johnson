# Chapter 9: Lab 1 Form input
## Objectives

* Create and interact with form elements
## Steps

1. Create a new folder in your WIP folder called Ch09.  

2. Create a new file in this folder called 1-form-input-data.html

1. Create form to make a get request. Start typing form in the body - with no angle brackets - and choose the emmet abbreviation


    ![Open in Preview mode to see image ](../screenshots/9-1-1-emmet.png)



1. Notice the output of the abbreviation. Your cursor will be in the action and you can type this then hit tab to get to the inner content of the form element.


    ![Open in Preview mode to see image ](../screenshots/9-1-2-emmet-output.png)



1. For action, type 1-form-done.html for now. Later we will discuss submitting to a server.


    ![Open in Preview mode to see image ](../screenshots/9-1-2-action-done.png)



1. In the same directory, create another html page called 1-form-done.html, use the html:5 template, and have only this minimal content in body.

    ![Open in Preview mode to see image ](../screenshots/9-1-3-done-page.png)




1. Return to 1-form-input.html. In form element start typing the word button (WITHOUT the < symbol / angle bracket) and choose the emmet abbreviation for submit type.

    ![Open in Preview mode to see image ](../screenshots/9-1-4a-emmet-submit.png)



1. Update the text to read Submit


    ![Open in Preview mode to see image ](../screenshots/9-1-4-submit.png)



1. Open this in your in browser and test that clicking the button goes to the done page.

1. Continuing in 1-form-data.html - above the submit button start typing in plain text - input:t then choose the emmet abbreviation for this input type = text.


    ![Open in Preview mode to see image ](../screenshots/9-1-5-input.png)



1. Complete the attributes as shown adding a handler for oninput.


    ![Open in Preview mode to see image ](../screenshots/9-1-6-input-with-attr.png)



1. Create a script and define a capitalize function to take value of the input and convert to uppercase, storing it back into the element value.


    ![Open in Preview mode to see image ](../screenshots/9-1-7-capitalize.png)



1. Open in the browser and test that this works as expected.

1. Mark your work as complete (online spreadsheet or in-class name tent card) then go on to the bonus for this chapter.