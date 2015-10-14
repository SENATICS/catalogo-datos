function saveFactDetalle(nro){
	var parametrosDet = { 
		item : $('#'+nro+'item').val(),
		rubro : $('#'+nro+'rubro').val(),
		cantidad : $('#'+nro+'cantidad').val(),	
		precio : $('#'+nro+'precio').val(),
		iva : $('#'+nro+'iva').val()			
	};
	var parametrosFact = {
		id_factura: $('#id_factura').val(), 
		acciondet : $('#acciondet').val()			
	};
	console.log(parametrosDet);


	if(validateDet(nro,parametrosDet)){

		parametrosDet.id_factura= $('#id_factura').val();
		parametrosDet.acciondet= $('#acciondet').val();

		console.log(parametrosDet);
		$.ajax({
			type: "POST",
				url: "addDetalle",
				data:parametrosDet, 
				dataType: "json",
			success: function(datos) {
				var summary = $("#form-summary");
				summary.empty();
				$('#'+nro+'subtotal').val(datos.subtotal);	
				console.log('succes funciona');		
				if(datos.error == 'true'){
					summary.append('<li class="list-group-item list-group-item-danger">'+datos.msg+'</li>');
					console.log('data error true');
				}else{
					summary.append('<li class="list-group-item list-group-item-success">Guardado exitosamente</li>');
						console.log('data error false');							
				}
				summary.show("slow");
				$(function(){ 				
					setTimeout(function(){
						summary.hide("slow"); 
					}, 3000); 

				});
			}, error: function(){ console.log('error handing here'); 
					addDet();
					inhabilitarFormDet(nro);
					$('#btnVolver').fadeIn();
					
			}
		});	
	}
}

function saveFact(){
	var parametros = {
		nro_factura : $('#nro_factura').val(),
		descripcion : $('#descripcion').val(),
		nro_llamado : $('#nro_llamado').val(),
		fecha : $('#fecha').val(),
		monto_total : $('#monto_total').val(),
		id_tipo_pago : $('#id_tipo_pago').val(),
		id_persona : $('#id_persona').val(),
		accion :  $('#accion').val()			
	};
	console.log(parametros);
	if(validate(parametros)){
		$.ajax({
			type: "POST",
	            url: "addCabecera",
	            data: parametros,
	            dataType: "json",
	            success: function(data) {
					var summary = $("#form-summary");
					summary.empty();
					$('#id_factura').val(data.numero);
	            	if(data.error == 'true'){
						summary.append('<li class="list-group-item list-group-item-danger">'+data.msg+'</li>');
					}else{
						summary.append('<li class="list-group-item list-group-item-success">Guardado exitosamente</li>');
						addDet();
				 		inhabilitarForm(parametros);
					}
					summary.show("slow");
					$(function(){
						setTimeout(function(){summary.hide("slow");}, 3000);});
	            },
	            error: function(){ console.log('error handing here');
	        	}
		});
	}	
}

function inhabilitarFormDet(nro){
			document.getElementById(nro+'item').disabled = true;
			document.getElementById(nro+'rubro').disabled = true;	
			document.getElementById(nro+'cantidad').disabled = true;	
			document.getElementById(nro+'precio').disabled = true;
			document.getElementById(nro+'iva').disabled = true;	
			document.getElementById(nro+'grabarDet').disabled = true;
		}
function validate(val){
			var retorno=true;
			$('#form-summary').html('');
			$.each(val,function(index,contenido){
			  if(typeof $('#'+index).val() == "undefined" || $('#'+index).val().trim() === ""){
				$('#form-summary').show(); 
				$('#form-summary').append('<li class="list-group-item list-group-item-danger">El campo <b>'+index+'</b> es un dato requerido</li>\n');	
				setTimeout(function(){  
					$('#form-summary').hide();
					$('#form-summary').html('');
				}, 7000);				
				retorno=false;
			  }
			});
			return retorno;			
		}
function validateDet(nro,val){
			var retorno=true;
			$('#form-summary').html('');
			$.each(val,function(index,contenido){
			  if(typeof $('#'+nro+index).val() == "undefined" || $('#'+nro+index).val().trim() === ""){
				$('#form-summary').show(); 
				$('#form-summary').append('<li class="list-group-item list-group-item-danger">El campo <b>'+index+'</b> es un dato requerido</li>\n');	
				setTimeout(function(){  
					$('#form-summary').hide();
					$('#form-summary').html('');
				}, 7000);				
				retorno=false;
			  }
			});
			return retorno;			
		}
function addDet(){
			var nroFila = $('#detallefact > tr').length +1;
			var content = '';
			content+='<tr>\n';
			content+='  <td><input type="text" class="form-control" id="'+nroFila+'item" value="'+nroFila+'" readonly="readonly"/></td>\n';
			content+='  <td><select class="selectpicker form-control" id="'+nroFila+'rubro"><option value="241">rubro</option></select></td> \n';
			content+='  <td><input type="text" class="form-control" id="'+nroFila+'cantidad" value=""/></td> \n';
			content+='  <td><select class="selectpicker form-control" id="'+nroFila+'iva" style="padding:0px; width:80px;"><option value="1">IVA 10</option></select></td> \n';
			content+='  <td><input type="text" class="form-control" id="'+nroFila+'precio" value=""/></td> \n';
			content+='  <td><input type="text" class="form-control" id="'+nroFila+'subtotal" value="0" readonly="readonly"/></td> \n';
			content+='  <td><input type="button" class="btn btn-primary" id="'+nroFila+'grabarDet" onclick="saveFactDetalle('+nroFila+')" value="Grabar"/></td> \n';
			content+='</tr> \n';
			$('#detallefact').append(content);
			$('#rubro').focus();
		}

		function inhabilitarForm(val){
			$.each(val,function(index,contenido){
				document.getElementById(index).disabled = true;	
			});
			$('#botoneracb').fadeOut();

		}	