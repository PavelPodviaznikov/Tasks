$(document).ready(function(){
   /*$('#button').click(function(){
       var toAdd = $('#inputItem').val();
       $('.list').append('<div class="item">' + toAdd + '</div>')
    });*/
    
	/*$('div .item').click(function(e){     --------------> Не происходит удаление.
    	$(e.target).remove();
	});*/
 	var clickCounter; 
	$(document).on('click','.item', function(){
        $(this).remove();
        $('#button').removeAttr('disabled');
        $('#button').css('background-color', '#cc0000');
        $('#button').data('counter', clickCounter-1);
    })  
	$('#button').data('counter', 1).click(function() {
    clickCounter = $(this).data('counter');    
    $(this).data('counter', clickCounter + 1);        
    if(clickCounter<=10){
    	var toAdd = $('#inputItem').val();
        $('.list').append('<div class="item">'+clickCounter+". "+ toAdd + '</div>')
        console.log(clickCounter);

    }
     
    else{
    	$('#button').attr('disabled', 'disabled');
    	$('#button').css('background-color', 'grey');
    	console.log(clickCounter);
    } 
    $('#delete_button').on('click', function(){
    	$('.item').remove();
    });


});
});
