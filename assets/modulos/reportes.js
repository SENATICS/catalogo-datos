/*FC - 03*/
function viewFC03InventarioBienesUsoPdf(){     
	window.open(site_url+'/reportes/printFC03InventarioBienesUso','_blank','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');	
}
/*FC - 04*/


function viewFC04MovimientoGenericoPdf(numero_instrumento){
	var fecha=document.getElementById('fecha').value; 
	var anho=document.getElementById('anho').value; 
    window.open(site_url+'/reportes/fc04_movimientoGenerico?fecha='+fecha+'&anho='+anho+'&numero_instrumento='+numero_instrumento,'_blank','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');	
}

/*FC - 05*/
function viewFC05ConsolidacionPdf(){
	var mes=document.getElementById('mes').value; 
	var anho=document.getElementById('anho').value; 
	window.open(site_url+'/reportes/fc05_consolidacionBienesUso?tipo=pdf&anho='+anho+'&mes='+mes,'_blank','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');	
}

function viewFC05ConsolidacionExcel(){
	var mes=document.getElementById('mes').value; 
	document.location = site_url+'/reportes/fc05_consolidacionBienesUso?tipo=excel&mes='+mes;
}

/*FC - 10*/
function viewFC10PlanillaResponsabilidadPdf(){
	var persona=document.getElementById('persona').value; 
	window.open(site_url+'/reportes/fc10_planillaResponsabilidadIndividual?tipo=pdf&persona='+persona,'_blank','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');	
}


/*FC - 11*/
function viewFC11MovimientoInternoPdf(){
    var nro=document.getElementById('nro').value; 
	window.open(site_url+'/reportes/fc11_movimientoInterno?tipo=pdf&nro='+nro,'_blank','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,status=no');	
}