/*
* @autor Luis Cardozo
*/

function obtenerDataRadio(){
   var tipo= $('input:radio[name=tipo]:checked').val();
   if(tipo ==='persona'){
    $('#tpb_persona').show();
    $('#tpb_deposito').hide();    
   }else if(tipo==='deposito'){
    $('#tpb_persona').hide();
    $('#tpb_deposito').show();    
   }
}




function validar(esto){ 
  valido=false; 
  for(a=0;a<esto.elements.length;a++){ 
    if(esto[a].type=="checkbox" && esto[a].checked==true){ 
      valido=true; 
      break 
    } 
  } 
 if(!valido){     
    return false; 
 } 
}  

function clearThis(val1,val2){  
    document.getElementById(val1).value="";    
    document.getElementById(val2).value="";    
}
//limpia las casilla del Formulario Definir institucion
function clearInstitucion(val1,val2,val3,val4,val5,val6,val7,val8){  
    document.getElementById(val1).value="";    
    document.getElementById(val2).value=""; 
    document.getElementById(val3).value="";    
    document.getElementById(val4).value=""; 
    document.getElementById(val5).value="";    
    document.getElementById(val6).value=""; 
    document.getElementById(val7).value="";    
    document.getElementById(val8).value="";    
}
function cerrarModal(modal){
    $(modal).modal('toggle');
}

function formatNum(num){
  var separador='.'; // separador para los miles
  var sepDecimal=','; // separador para los decimales
  num +='';
  var splitStr = num.split('.');
  var splitLeft = splitStr[0];
  var splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
  var regx = /(\d+)(\d{3})/;
  while (regx.test(splitLeft)) {
     splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
  }
  return splitLeft+splitRight;
}

function calculoMult(val1,val2,retorno){
  var resp= document.getElementById(val1).value * document.getElementById(val2).value;
  document.getElementById(retorno).value= isNaN(resp) != true ? formatNum(resp) : 0;
}


function getParametroIframe(name,url,key){
     document.getElementById(name).src =url+"?key="+document.getElementById(key).value;
}

function viewIframeModal(titulo,src,parametro){
   var key="";
   $('#title_modal').html(titulo);   
   if(parametro != undefined){
     key= document.getElementById(parametro).value != undefined ? "?key="+document.getElementById(parametro).value : '';
   }   
   $('#frame_modal').html('<iframe id="framModal" style="border:0;width:100%;" frameborder="0" scrolling="no" src="'+src+key+'"></iframe>');    
}

function obtenerDatoInterno(data){
    var row= eval(data);    
    $.each(row, function(key,value) {
        parent.document.getElementById(key).value= value;    
    });     
    parent.cerrarModal('#modalBuscador');       
}

function obtenerDatoInstitucion(data){
    var row= eval(data);    
    //var aux = '';
    $.each(row, function(key,value) {
           
        //aux = value;
    if (key.indexOf("id")==0) {
        parent.document.getElementById(key).value= value; 
    }else{
        parent.document.getElementById(key).innerHTML = value; 
    }
    console.log(key+"= "+value);
    });     
    parent.cerrarModal('#modalBuscador');       
}

function viewCheckHabTipoAlta(id,capa1){
    var opcionSeleccionada = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;                      
    if(opcionSeleccionada == 4){
        $(capa1).attr("style", "display:block");    
    }else{        
        $(capa1).attr("style", "display:none");        
    }    
}

//MANEJO DE REMITENTE DESTINATARIO DEL MOVIMIENTO DE BIENES DE USO
function viewCheckHabTipoMovimiento(id){
    var opcionSeleccionada = parseInt(document.getElementById(id).options[document.getElementById(id).selectedIndex].value);
    vaciarGrilla();
    switch (opcionSeleccionada) {  
        case 2: //DEPOSITO A DEPOSITO
            $('#div_deposito_rte').attr("style", "display:block");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:block");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("deposito_rte").value = "";
            document.getElementById("deposito_dest").value = "";
            

        break;        
        case 3://DEPOSITO A PERSONA
            $('#div_deposito_rte').attr("style", "display:block");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:block");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("deposito_rte").value = "";
            document.getElementById("persona_dest").value = "";
            
        break;
        case 4: //DEPOSITO A DIRECCION
            $('#div_deposito_rte').attr("style", "display:block");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:block");

            document.getElementById("id_deposito_rte").value = "";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "";

            document.getElementById("deposito_rte").value = "";
            document.getElementById("direccion_dest").value = "";
        break;
        case 5: //PERSONA A DEPOSITO
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:block");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:block");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("persona_rte").value = "";
            document.getElementById("deposito_dest").value = "";
        break;    
        case 6: //PERSONA A PERSONA
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:block");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:block");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("persona_rte").value = "";
            document.getElementById("persona_dest").value = "";
        break;
        case 7: //PERSONA A DIRECCION
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:block");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:block");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "";

            document.getElementById("persona_rte").value = "";
            document.getElementById("direccion_dest").value = "";
        break;
        case 8: //DIRECCION A DEPOSITO
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:block");

            $('#div_deposito_dest').attr("style", "display:block");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "";

            document.getElementById("id_deposito_dest").value = "";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("direccion_rte").value = "";
            document.getElementById("deposito_dest").value = "";
        break;
        case 9: //DIRECCION A PERSONA
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:block");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:block");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "";
            document.getElementById("id_direccion_dest").value = "0";

            document.getElementById("direccion_rte").value = "";
            document.getElementById("persona_dest").value = "";
        break;
        case 10: //DIRECCION A DIRECCION
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:block");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:block");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "";

            document.getElementById("direccion_rte").value = "";
            document.getElementById("direccion_dest").value = "";
        break;
        default: //ELIGE EL VALOR "SELECCIONE UNA OPCION"
            $('#div_deposito_rte').attr("style", "display:none");
            $('#div_persona_rte').attr("style", "display:none");
            $('#div_direccion_rte').attr("style", "display:none");

            $('#div_deposito_dest').attr("style", "display:none");
            $('#div_persona_dest').attr("style", "display:none");
            $('#div_direccion_dest').attr("style", "display:none");

            document.getElementById("id_deposito_rte").value = "0";
            document.getElementById("id_persona_rte").value = "0";
            document.getElementById("id_direccion_rte").value = "0";

            document.getElementById("id_deposito_dest").value = "0";
            document.getElementById("id_persona_dest").value = "0";
            document.getElementById("id_direccion_dest").value = "0";
    }
}

function viewCheckHabUser(id, capa1,capa1_1,capa2,check,capa3){
    var opcionSeleccionada = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;                  
    //En caso que el tipo persona corresponda a 1 = funcionario, se habilitará el checkbox de Agregar Usuario
    if(opcionSeleccionada == 1){
        $(capa1).attr("style", "display:block");
        $(capa1_1).attr("style", "display:block");    
        $(capa3).attr("style", "display:block");
    }else{
        document.getElementById(check).checked=false;
        $(capa1).attr("style", "display:none");
        $(capa2).attr("style", "display:none");    
        $(capa1_1).attr("style", "display:none");   
        $(capa3).attr("style", "display:none");
    }
}
//visualizar capa de insercion de usuario y pass con su respectivo rol
function viewElement(id_check,capa){
    var element = document.getElementById(capa);
    var check = document.getElementById(id_check);
    if (check.checked) {
        $(element).attr("style", "display:block");    
    }else {
        $(element).attr("style", "display:none");    
    } 
}

function viewElementCapa(id_check,capa1, capa2){    
    var element1 = document.getElementById(capa1);
    var element2 = document.getElementById(capa2);

    var check = document.getElementById(id_check);
    if (check.checked) {
        $(element1).attr("style", "display:block");
        $(element2).attr("style", "display:none");    

    }else {
        $(element1).attr("style", "display:none");    
        $(element2).attr("style", "display:block");

    }     
}

function viewElementCapaPerson(id_check,capa1, capa2){    
    var element1 = document.getElementById(capa1);
    var element2 = document.getElementById(capa2);
    
    var check = document.getElementById(id_check);
    if (check.checked) {
        $(element1).attr("style", "display:block");
        $(element2).attr("style", "display:none");    
        
        $('#id_tipo_persona').val('1');      
        $('#id_tipo_persona').not(this).children('option[value=1]').attr('disabled',false); 
        $('#add_user').attr("style", "display:block");
        $('#area_oficina').attr("style", "display:block");    
        $('#div_cargo').attr("style", "display:block");

    }else {
        $(element1).attr("style", "display:none");    
        $(element2).attr("style", "display:block");

        $('#id_tipo_persona').val('2');              
        $('#id_tipo_persona').not(this).children('option[value=1]').attr('disabled', true);
        document.getElementById('usuario_hab').checked=false;
        $('#add_user').attr("style", "display:none");
        $('#capa2').attr("style", "display:none");    
        $('#area_oficina').attr("style", "display:none");   
        $('#div_cargo').attr("style", "display:none");

    }     
}


$('.form_date').datetimepicker({
    language:  'en',weekStart: 1,todayBtn:1, autoclose:1, todayHighlight: 1,startView: 2,minView: 2,forceParse: 0
});

function foco(idElemento){
  setTimeout(function() {
    document.getElementById(idElemento).focus();
  },1400);
}

function parseDataDel(id,url){
    $('#accion_anular').attr('action',url);
    $('#titulo_del').html('Atención');
    $('#mensaje_del').html('¿Está seguro que desea dar de Baja?');
    $('#idtabla').val(id);
}

function parseDataDelObs(id,url, urlCbo){    
    $('#accion_anular').attr('action',url);
    $('#accion_anular').attr('onSubmit','return validarMotivoBaja()');
    $('#titulo_del').html('Baja');
    $('#mensaje_del').html('<div>Motivo baja:</div><p><textarea rows="5" name="obs_baja" id="obs_baja" class="resizeTextArea text_mayuscula"></textarea></p>');
    $('#idtabla').val(id);
    $.post(urlCbo,{},function(data) {                
        $("#tipo").html(data);
    });        
}

function vacio(q) {
    for ( i = 0; i < q.length; i++ ) {
        if ( q.charAt(i) != " " ) {
            return true;
        }
    }
    return false;
}

function validarMotivoBaja(){
    var resp=false; 
    var retorno='<br/>';     
    var combo1 = document.getElementById("cbo").value;
    var motivo = document.getElementById('obs_baja').value;

    if (vacio(motivo) == false) {
        retorno+='<div class="alert alert-danger">El campo Motivo Baja es requerido</div>';        
        resp=true;  
    }    
   if(combo1 == 0 ) {
        retorno+='<div class="alert alert-danger">El campo Tipo Baja es requerido</div>';        
        resp=true;  
    }    

    if(resp==true){
        $('#error_obs').html(retorno);
        setTimeout(function() { $('#error_obs').html(''); },5000); 
        return false;                           
    }else{
        return true;
    }
}


//visor de datos
function parseDataView(id,titulo){
    var contentRow = jQuery("#grilla").jqGrid('getRowData', id);
    var columnNames = $("#grilla").jqGrid('getGridParam','colModel');            
    $('#titulo').html(titulo);            
    for (var i = 0; i < columnNames.length; i++) {              
        $('#'+columnNames[i].name).html(contentRow[columnNames[i].name] != '' ? contentRow[columnNames[i].name] : 'N/D'); 
    } 
}

function buscarDatos(content) {
    var buscar = $('#buscar').val() === null ? '' : $('#buscar').val();                
    $("#grilla").jqGrid('setGridParam', {
        url: site_url+'/'+content+'?buscar='+ encodeURIComponent(buscar),
        datatype: 'json',
        mtype: 'POST'
    }).trigger('reloadGrid');
}

function filterRows(event, content) {
    if (doSearchEnter(event) === true) {
       buscarDatos(content);
    }
}


function doSearchEnter(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
        return true;
    } else {
        return false;
    }
}

function responsive_jqgrid(jqgrid) {
    jqgrid.find('.ui-jqgrid').addClass('clear-margin span12').css('width', '');
    jqgrid.find('.ui-jqgrid-view').addClass('clear-margin span12').css('width', '');
    jqgrid.find('.ui-jqgrid-view > div').eq(1).addClass('clear-margin span12').css('width', '').css('min-height', '0');
    jqgrid.find('.ui-jqgrid-view > div').eq(2).addClass('clear-margin span12').css('width', '').css('min-height', '0');
    jqgrid.find('.ui-jqgrid-sdiv').addClass('clear-margin span12').css('width', '');
    jqgrid.find('.ui-jqgrid-pager').addClass('clear-margin span12').css('width', '');
}

function cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel){     
    jQuery("#grilla").jqGrid({
        url:table_url,
        datatype: 'json',
        mtype: 'POST',
        colNames:table_colNames,
        colModel:table_colModel,
        pager: '#paginacion',
        rowNum:table_cantPag,
        rowList:table_cantList,
        sortname: table_sortName,    
        sortorder: table_sorOrder,                    
        caption: "Filtro: <input type=text name=buscar id=buscar onkeypress=filterRows(event,'"+table_name+"/get_json'); id=buscar>",                            
        shrinkToFit: false,
        no_legacy_api: true,                    
        rownumbers: false,
        gridview: false,
        hidegrid: false,                         
        enableSearch: false,
        viewrecords: true,
        width: '100%', height: "auto",                    
        beforeRequest: function() {
            responsive_jqgrid($("#grilla"));
        },                
        cellWidth: function() {
                var testcell = $("<div class='ui-jqgrid'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;'></td></tr></table></div>").find("td").width(),
                        ret = (testcell !== 5);
                testcell = null;
                return ret;
        },    
    }).navGrid('#pager',{edit:false,add:false,del:false});
   $("#grilla").jqGrid('setFrozenColumns'); 
    $(window).bind('resize', function() {
        var width = $('#jqGrid_container').width();
        $('#grilla').setGridWidth(width);
    });
}

//por persona
function cargarGrillaMovimiento(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel){     
    jQuery("#grilla").jqGrid({
        url:table_url,
        datatype: 'json',
        mtype: 'POST',
        colNames:table_colNames,
        colModel:table_colModel,
        pager: '#paginacion',
        rowNum:table_cantPag,
        rowList:table_cantList,
        sortname: table_sortName,    
        sortorder: table_sorOrder,                    
//caption: "Filtro: <input type=text name=buscar id=buscar onkeypress=filterRows(event,'"+table_name+"/get_json_bienesxpersona'); id=buscar>",
        shrinkToFit: false,
        no_legacy_api: true,                    
        rownumbers: false,
        gridview: false,
        hidegrid: false,                         
        enableSearch: false,
        viewrecords: true,
        width: '100%', height: "auto",  
        beforeRequest: function() {
            responsive_jqgrid($("#grilla"));

        },                
        cellWidth: function() {
                var testcell = $("<div class='ui-jqgrid'><table class='ui-jqgrid-btable' style='width:5px;'><tr class='jqgrow'><td style='width:5px;'></td></tr></table></div>").find("td").width(),
                        ret = (testcell !== 5);
                testcell = null;
                return ret;
        },    
    }).navGrid('#pager',{edit:false,add:false,del:false});
   $("#grilla").jqGrid('setFrozenColumns'); 
    $(window).bind('resize', function() {
        var width = $('#jqGrid_container').width();
        $('#grilla').setGridWidth(width);
    });   
}
