var doneList = [];
var undoneList = [];
var clickCounter;

$(document).ready(function(){
    $('#button').data('counter', 0).click(function(){
        clickCounter = $(this).data('counter');
        undoneList[clickCounter] = $('#inputItem').val();
        $('#undone_tasks').append('<div class="item"><input type="checkbox" class="check">' + undoneList[clickCounter] + '</input></div>');
        $(this).data('counter', clickCounter+1);
        $('#inputItem').css('placeholder', "Input your tasks here");
    });

    /*$(document).on('click','.item', function(){
        $(this).remove();
    }); */
    $('#delete_button').on('click', function(){
        $('.item').remove();
        undoneList = [];
    });
});





































        /*$('#button').removeAttr('disabled');
        $('#button').css('background-color', '#cc0000');
        $('#button').data('counter', clickCounter-1);*/



  
    
	/*$('div .item').click(function(e){     --------------> Не происходит удаление.
    	$(e.target).remove();
	});*/
 	//var clickCounter; 
	
	/*$('#button').data('counter', 1).click(function() {
    clickCounter = $(this).data('counter');    
    $(this).data('counter', clickCounter + 1);        
    if(clickCounter<=20){
    	var toAdd = $('#inputItem').val();
        $('.list').append('<div class="item">'+ toAdd + '</div>')
        console.log(clickCounter);

    }
     
    else{
    	$('#button').attr('disabled', 'disabled');
    	$('#button').css('background-color', 'grey');
    	console.log(clickCounter);
    } */
   
