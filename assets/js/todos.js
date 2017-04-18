var collapsed = false;

// Make a todo as strikethrough
$("ul").on("click", ".pencil", function() {
  $(this).children().toggleClass("rotate");
  $(this).parent().toggleClass("completed");
});

// Click on trash can to delete a Todo
$("ul").on("click", ".trash", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Create new todos
$("input[type='text']").on("keypress", function(event) {
  	if (event.which === 13) {
		// Store todo value
		var todoText = $(this).val();

		// Clear the input after creating the li
		$(this).val("");

		$("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span><span class='pencil'><i class='fa fa-pencil'></i></span> " + todoText + "</li>");
	
		// Restore list size if new todo is entered
    	if (collapsed) {
      		$(".fa-list-ul").animate({ fontSize: '60px' });
      		$(".fa-list-ul").animate({ fontSize: '24px' });
      		$("ul").slideToggle(800);
      	collapsed = false;
    	}
	}
});

// Plus button animation
$(".fa-plus").on("click", function(){
	$(this).toggleClass("rotate");
	$("input[type='text']").slideToggle();
})

// Animation for minimize and fullsize restore for list
$(".fa-list-ul").on("click", function(){
  if(collapsed) {
    $(this).animate({fontSize: '60px'});
    $(this).animate({fontSize: '24px'});
    $("ul").slideToggle(800);
    collapsed = false;
  }
  else {
    $(this).animate({fontSize: '0px'});
    $(this).animate({fontSize: '24px'});
    $("ul").slideToggle(800);
    collapsed= true;
  }
});