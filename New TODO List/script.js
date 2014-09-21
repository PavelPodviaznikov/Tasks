var doneList = [];
var undoneList = [];
var clickCounter;
var global;

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).siblings().slideUp(400);
		$('.tabs ' + currentAttrValue).delay(400).slideDown(400);
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    $('#button').data('counter', 0).click(function(){
        clickCounter = $(this).data('counter');
        undoneList[clickCounter] = $('#inputItem').val();
        $('#undone_tasks').append('<div class="item"><input type="checkbox" class="check">' + undoneList[clickCounter] + '</input></div>');
        $(this).data('counter', clickCounter+1);
    	$('#undone_tasks_counter').text(undoneList.length);
    });
    $('#delete_button').on('click', function(){
        $('.item').remove();
        undoneList = [];
        $('#button').data('counter', 0);
    	$('#undone_tasks_counter').text(undoneList.length);
    });
    $(document).on('click','.item', function(){
        global = $(this).val();
        console.log(global);
    }); 
    /*$('#counter_button').on('click', function(){
    	$('#done_tasks_counter').text(doneList.length);
    	$('#undone_tasks_counter').text(undoneList.length);
    });*/
});