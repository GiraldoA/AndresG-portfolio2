/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    //This allows me to create a background color for my text
    $(".practice").css("background-color", "blue");
    
    //this allows me to put a background color for a more specific line of text
    $('p:first').css("background-color", "indigo");
    $('h1').css("background-color", "brown");
    
    //this allows me to show that you clicked a buttonn which basically pops up a notification
    $('#oneButton').bind('click', alertButtonClick);
    
    //this allows me to change the text when the mouse hover overs it
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    //This allows me to add a paragraph and delete a paragraph
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    
    //this allows me to toggle the text like slide on text up  to show another
    $('#toggleTheText').bind('click', toggleTheText);
    
    //this allows me to add an accordion to my page
    $('#superHumans').accordion({header: "h3"});
    
    $("#tabs").tabs();
    $("#tabs").css({'width':'500'});
    
});

function mouseOverMe() {
    $("h1").html("bwahahahaha");
}

function mouseOutMe() {
    $('h1').html('evil laugh');
}


function alertButtonClick(){
    alert("You clicked the button");
}

function addAPara() {
    $('#randPara').append('<p> A paragraph</p>');
    
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function toggleTheText() {
    $('h4').toggle(2500);
}


