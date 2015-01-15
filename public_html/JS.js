/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".practice").css("background-color", "blue");
    $('p:first').css("background-color", "indigo");
    $('h1').css("background-color", "brown");
    $('#oneButton').bind('click', alertButtonClick);
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#addAPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#toggleTheText').bind('click', toggleTheText);
    $('#superHumans').accordion({header: "h3"});
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


