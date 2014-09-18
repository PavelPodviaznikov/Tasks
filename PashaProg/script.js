




/*$(document).ready(function(){
	$('#btn1').click(function(){
		var $p = $('<p>lala</p>')
		$('#messege').append($p);
		$p.hide(5000);
	});


});*/






$(function() {
    // Handler for .ready() called.
    $("#btn1").on("click", getAllMesseges);
});



function getAllMesseges(){
	var messege = allMesseges();
	for(var i in messege)
	{
		$('#messeges_area').append('<p>'+messege[i].text+'</p>');
	}
}

