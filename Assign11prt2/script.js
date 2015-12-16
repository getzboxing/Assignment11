 

$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('team.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.title.search(myExp) != -1)) {
				output += '<li>';
                output += '<a href="#employees" onclick = "showDetails(' + val.id + ')">';
                output += '<img src="'+ val.imagePath +'" alt='+ val.name +' />';
				output += '<h2>'+ val.name +'</h2>';
				 
				output += '<p>'+ val.title +'</p>';
                output += '</a>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON search
    
    
    
});

 /*
 
function showDetails(id) {
     
    $.getJSON("team.json", function(data) {
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#employees #myemployee").append('<div data-role="page">'
                    '</div>' 
                );
            });
        });
   
  });
}
 
  