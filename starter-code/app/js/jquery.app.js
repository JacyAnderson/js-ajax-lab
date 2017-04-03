var allCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
  .done(function(data){
    var parsedCats = JSON.parse(data);
    $('#cats').append('<li>Yeah!</li>');
    for (var i = 0; i < parsedCats.length; i++) {
    	$('#cats').append('<li>' + parsedCats[i].name + "-" + parsedCats[i].note + '</li>');
	}

    $('#new-cat').on("submit", function(event){
      event.preventDefault();
      console.log("I am not insane");
      var catName = $('#cat-name').val();
      console.log(catName);
      var catNote = $('#cat-note').val();
      console.log(catNote);

      let newCat = {
      	name: catName,
      	note: catNote,
  	  }

  	  let newCatString = JSON.stringify(newCat);

      // $('#cats').append('<li>' + catName + "-" + catNote + '</li>');

      $.ajax({
        url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
        type: "POST",
        data: newCatString
      })
        $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
          .done(function(data){
 			var newParsedCat = JSON.parse(data);
 			var addCat = newParsedCat.pop();
 			console.log(addCat);
 			$('#cats').append('<li>' + addCat.name + "-" + addCat.note  + '</li>');
        })
    });
});