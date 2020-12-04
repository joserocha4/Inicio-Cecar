$(document).ready(function () {
	var max_fields = 10;
	var wrapper = $(".input_fields_wrap");
	var add_button = $("#add_field_button");
	

	var x = 1;

	
	var resultC1 = 0;
	$(add_button).click(function (e) {
		e.preventDefault();
		if (x < max_fields) {
			x++;

			$(wrapper).append('<div class="R1"><input type="number" class="form-control" id="notes" name="mytext[]"/><span class="input-group-addon">-</span><input type="number"  class="form-control" id="porcentaje" name="mytext2[]"><a href="#" class="remove_field">Remove</a></div>');
			
		}
	});

	$(wrapper).on("click", ".remove_field", function (e) { 
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})


	$("#Calcular").on("click", function (e) {
		var resultado = 0;
		$(".R1").each(function () {
			var lnota = $(this).find("#notes").val()
			var lpor = $(this).find("#porcentaje").val()
			console.log(lnota * lpor / 100)
			resultado += lnota * lpor / 100;
		});

		
		console.log(resultado);
		$("#resultado").val(resultado);

	});

	

});