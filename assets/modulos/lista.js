/*
 * @autor: Luis Cardozo
*/

$(document).ready(function(){
	var lista = document.getElementById('lista');
        if(lista != null){    
            switch (lista.value) {
                case 'lista_personaList':
                    cargarGrillaPersona();
                    break;        
                case 'lista_bienList':
                    cargarGrillaBienUso();
                    break;    
                case 'lista_bienBaja':
                    cargarGrillaBienUsoBaja();
                    break;                    
                case 'lista_movimientoList':
                    cargarListaBienes();
                    break;
                case 'lista_facturaList':
                    cargarListaFactura();
                    break;
                case 'lista_movimientoEdit':
                    cargarListaMovimientos();
                    break;
                case 'lista_tipoInstrumentoList':
                    cargarListaTipoInstrumento();
                    break;
                case 'lista_depositoList':
                    cargarListaDeposito();
                    break;   
                
        }
    }    
});


//LISTA DE PERSONAS
function cargarGrillaPersona(){
    var table_name='persona';
    var table_url=site_url+'/persona/get_json';    
    var table_sortName='id_persona';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','NOMBRE Y APELLIDO','RAZÓN SOCIAL','N° DOCUMENTO','TELEFONO','DIRECCION','CORREO','CIUDAD','TIPO PERSONA','USUARIO','ROL','PERSONA ACTIVA?','USUARIO ACTIVO?','CARGO','ACCIÓN'];
    var table_colModel=[{name:'id_persona', index:'id_persona', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'nombre_apellido', index:'nombre_apellido', width:130,height:20},
                        {name:'razon_social', index:'razon_social', width:130,height:20},
                        {name:'cedula',index:'cedula', align:"right", width:50,height:20} ,
                        {name:'telefono', index:'telefono',hidden:true, width:50,height:20},           
                        {name:'direccion', index:'direccion',hidden:true, width:50,height:20},           
                        {name:'correo', index:'correo',hidden:true, width:50,height:20},           
                        {name:'ciudad', index:'ciudad',hidden:true, width:50,height:20},           
                        {name:'tipo_persona', index:'tipo_persona', width:65,height:20, align:"center"},                            
                        {name:'usuario', index:'usuario', width:65,hidden:false,height:20, align:"left"},
                        {name:'rol', index:'rol', width:65,hidden:true,height:20, align:"center"},                            
                        {name:'persona_estado', index:'persona_estado', width:65,height:20, align:"center", resizable:false,sortable:false},                            
                        {name:'usuario_estado', index:'usuario_estado', width:65,height:20, align:"center", resizable:false,sortable:false},
                        {name:'cargo', index:'cargo', width:65,height:20, align:"center",hidden:true},                                
                        {name:'accion', index:'accion', width:40,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

//LISTA DE TIPO INSTRUMENTO
function cargarListaTipoInstrumento(){
    var table_name='tipo_instrumento';
    var table_url=site_url+'/tipo_instrumento/get_json';    
    var table_sortName='id_instrumento';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','INSTRUMENTO','OBSERVACIÓN','ACCIÓN'];
    var table_colModel=[{name:'id_instrumento', index:'id_instrumento', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'descripcion', index:'descripcion', width:130,height:20,resizable:false},
                        {name:'observacion', index:'observacion', width:130,height:20,resizable:false},                        
                        {name:'accion', index:'accion', width:40,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}
function cargarListaTipoInstrumento(){
    var table_name='tipo_instrumento';
    var table_url=site_url+'/tipo_instrumento/get_json';    
    var table_sortName='id_instrumento';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','INSTRUMENTO','OBSERVACIÓN','ACCIÓN'];
    var table_colModel=[{name:'id_instrumento', index:'id_instrumento', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'descripcion', index:'descripcion', width:130,height:20,resizable:false},
                        {name:'observacion', index:'observacion', width:130,height:20,resizable:false},                        
                        {name:'accion', index:'accion', width:40,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

//LISTA DE DEPOSITO
function cargarListaDeposito(){
    var table_name='deposito';
    var table_url=site_url+'/deposito/get_json';    
    var table_sortName='id_deposito';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','PREFIJO','DEPÓSITO','ACCIÓN'];
    var table_colModel=[{name:'id_deposito', index:'id_deposito', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'prefijo', index:'prefijo', width:130,height:20,resizable:false},                      
                        {name:'descripcion', index:'descripcion', width:130,height:20,resizable:false},                      
                        {name:'accion', index:'accion', width:40,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

//LISTA DE BIENES DE USO
function cargarGrillaBienUso(){
    var table_name='bien_uso';
    var table_url=site_url+'/bien_uso/get_json';    
    var table_sortName='id_bien';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','DESCRIPCIÓN','TIPO DE INCORP.','N° DE INST.','FECHA DE INST.','FECHA DE INCORP.','CANTIDAD','VALOR UNITARIO','ROTULADO','ESTADO DE CONS.','CUENTA','SUB-CUENTA','ANALÍTICO 1','ANALÍTICO 2','VIDA ÚTIL','OBSERVACION ALTA','OBSERVACION BAJA','TIPO BAJA','DEPÓSITO','ACTIVO?','USUARIO','ACCIÓN'];
    var table_colModel=[{name:'id_bien', index:'id_bien', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'bien_uso_descripcion', index:'bien_uso_descripcion', width:250,height:20,resizable:false},
                        {name:'tipo_alta', index:'tipo_alta', width:105,height:20,resizable:false},
                        {name:'numero_instrumento', index:'numero_instrumento', align:"right",width:85,height:20,resizable:false,sortable:true},
                        {name:'fecha_instrumento', index:'fecha_instrumento', align:"center",width:100,height:20,resizable:false},
                        {name:'fecha_incorporacion_movimiento', index:'fecha_incorporacion_movimiento',align:"center",width:120,height:20,resizable:false},                            
                        {name:'cantidad', index:'cantidad', width:130,height:20,hidden:true,resizable:false},
                        {name:'valor_unitario', index:'valor_unitario', width:100,hidden:true,height:20,resizable:false},                            
                        {name:'codigo_patrimonial', index:'codigo_patrimonial', width:60,align:"right",height:20,resizable:false},
                        {name:'estado_de_uso', index:'estado_de_uso', width:90,align:"left",height:20,resizable:false},
                        {name:'cuenta', index:'cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'sub_cuenta', index:'sub_cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'analitico1', index:'analitico1', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'analitico2', index:'analitico2', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'vida_util', index:'vida_util', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'observacion_alta', index:'observacion_alta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'observacion_baja', index:'observacion_baja', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'tipo_baja', index:'tipo_baja',resizable:false,hidden:true},
                        {name:'deposito', index:'deposito', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'estado', index:'estado', width:45,align:"center",height:20,resizable:false},
                        {name:'usuario', index:'usuario', width:45,align:"center",height:20,hidden:true,resizable:false},
                        {name:'accion', index:'accion', width:65,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

//LISTA DE BIENES DE USO  PARA BAJAS
function cargarGrillaBienUsoBaja(){
    var table_name='bien_uso';
    var table_url=site_url+'/bien_uso/get_json_baja';    
    var table_sortName='id_bien';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','DESCRIPCIÓN','TIPO DE INCORPORACIÓN','N° DE INSTRUMENTO','FECHA DE INSTRUMENTO','FECHA DE INCORPORACIÓN','CANTIDAD','VALOR UNITARIO','ROTULADO','ESTADO DE CONS.','CUENTA','SUB-CUENTA','ANALÍTICO 1','ANALÍTICO 2','VIDA ÚTIL','OBSERVACION ALTA','OBSERVACION BAJA','TIPO BAJA','DEPÓSITO','ACTIVO?','USUARIO','SELECCIONAR'];
    var table_colModel=[{name:'id_bien', index:'id_bien', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'bien_uso_descripcion', index:'bien_uso_descripcion', width:250,height:20,resizable:false},
                        {name:'tipo_alta', index:'tipo_alta', width:105,height:20,resizable:false},
                        {name:'numero_instrumento', index:'numero_instrumento', align:"right",width:85,height:20,resizable:false,sortable:true},
                        {name:'fecha_instrumento', index:'fecha_instrumento', align:"center",width:100,height:20,resizable:false},
                        {name:'fecha_incorporacion_movimiento', index:'fecha_incorporacion_movimiento',align:"center",width:120,height:20,resizable:false},                            
                        {name:'cantidad', index:'cantidad', width:130,height:20,hidden:true,resizable:false},
                        {name:'valor_unitario', index:'valor_unitario', width:100,hidden:true,height:20,resizable:false},                            
                        {name:'codigo_patrimonial', index:'codigo_patrimonial', width:60,align:"right",height:20,resizable:false},
                        {name:'estado_de_uso', index:'estado_de_uso', width:90,align:"left",height:20,resizable:false},
                        {name:'cuenta', index:'cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'sub_cuenta', index:'sub_cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'analitico1', index:'analitico1', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'analitico2', index:'analitico2', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'vida_util', index:'vida_util', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'observacion_alta', index:'observacion_alta', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'observacion_baja', index:'observacion_baja', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'tipo_baja', index:'tipo_baja',resizable:false,hidden:true},
                        {name:'deposito', index:'deposito', width:90,align:"left",height:20,resizable:false,hidden:true},
                        {name:'estado', index:'estado', width:45,align:"center",height:20,resizable:false},
                        {name:'usuario', index:'usuario', width:45,align:"center",height:20,hidden:true,resizable:false},
                        {name:'accion', index:'accion', width:65,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrillaMovimiento(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}


//LISTADO DEL REGISTRO DE MOVIMIENTOS
function cargarListaBienes(){
     var table_name='movimiento/get_json';
        var table_url=site_url+'/movimiento/get_json';    
        var table_sortName='movimiento.id_movimiento';
        var table_sorOrder='desc';
        var table_cantPag=10;
        var table_cantList=[10,20,30,40,50];
        var table_colNames=['NRO','MOTIVO','TIPO','REMITENTE','RECEPTOR','FECHA MOV.','OBSERVACION MOVIMIENTO','ID','ROTULADO','DESCRIPCIÓN DEL BIEN','TIPO INCORPORACIÓN','N° INSTRUMENTO','FECHA INSTRUMENTO','FECHA INCORPORACIÓN','CANTIDAD','VALOR UNITARIO','ESTADO DE USO','CUENTA','SUB-CUENTA','ANALÍTICO 1','ANALÍTICO 2','VIDA ÚTIL','OBSERVACION','DEPÓSITO','ESTADO','OBSERVACION DE BAJA','TIPO BAJA','USUARIO QUE DIO DE BAJA','VER'];
        var table_colModel=[{name:'id_movimiento', index:'id_movimiento', align:"right",width:70,height:20,resizable:false},
                            {name:'tipo_motivo_descripcion', index:'tipo_motivo_descripcion', align:"left",width:110,height:20,resizable:false},
                            {name:'motivo_descripcion', index:'motivo_descripcion', align:"left",width:270,height:20,resizable:false},
                            {name:'remitente', index:'remitente', width:155,height:20,align:"left",resizable:false},
                            {name:'receptor', index:'receptor', width:155,height:20,resizable:false,sortable:true},
                            {name:'fecha_movimiento', index:'fecha_movimiento',align:"left",width:85,height:20,resizable:false}, 
                            {name:'observacion_movimiento', index:'observacion_movimiento', width:155,height:20,align:"left",resizable:false,hidden:true},
                            {name:'id_bien', index:'id_bien', width:60, height:20,resizable:false, align:"center",hidden:true},
                            {name:'codigo_patrimonial', index:'codigo_patrimonial', align:"right", width:80,height:20,resizable:false},
                            {name:'bien_uso_descripcion', index:'bien_uso_descripcion', width:250,height:20,resizable:false},                            
                            {name:'tipo_alta', index:'tipo_alta', width:90,height:20,resizable:false,hidden:true},
                            {name:'numero_instrumento', index:'numero_instrumento', align:"right",width:90,height:20,resizable:false,sortable:true,hidden:true},
                            {name:'fecha_instrumento', index:'fecha_instrumento', align:"left",width:105,height:20,resizable:false,hidden:true},
                            {name:'fecha_incorporacion_movimiento', index:'fecha_incorporacion_movimiento',align:"left",width:105,height:20,resizable:false,hidden:true},                            
                            {name:'cantidad', index:'cantidad', width:130,height:20,hidden:true,resizable:false,hidden:true},
                            {name:'valor_unitario', index:'valor_unitario', width:100,hidden:true,height:20,resizable:false,hidden:true},                                                      
                            {name:'estado_de_uso', index:'estado_de_uso', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'cuenta', index:'cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'sub_cuenta', index:'sub_cuenta', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'analitico1', index:'analitico1', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'analitico2', index:'analitico2', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'vida_util', index:'vida_util', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'observacion_alta', index:'observacion_alta', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'deposito', index:'deposito', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'estado', index:'estado', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'observacion_baja', index:'observacion_baja', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'tipo_baja', index:'tipo_baja', width:90,align:"left",height:20,resizable:false,hidden:true},
                            {name:'usuario', index:'usuario', width:90,align:"left",height:20,resizable:false,hidden:true},

                            {name:'accion', index:'accion', width:60,height:20, align:"center",sortable:false, resizable:true}];                        
        cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

function recargarGrilla(){
    $('#grilla').trigger('reloadGrid');
}

//LISTADO DE BIENES POR PERSONA
function cargarListaMovimientos(){
    var table_name='movimiento/get_json_bienesxpersona';
    var table_url=site_url+'/movimiento/get_json_bienesxpersona?remitente=0';   
    var table_sortName='id_bien';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','DESCRIPCIÓN','TIPO DE INCORPORACIÓN','N° DE INSTRUMENTO','FECHA DE INSTRUMENTO','FECHA DE INCORPORACIÓN','CANTIDAD','VALOR UNITARIO','ROTULADO','ESTADO DE CONSERVACIÓN','SELECCIONAR*'];
    var table_colModel=[{name:'id_bien', index:'id_bien', width:20, height:20,resizable:false, align:"center",hidden:true},
                        {name:'bien_uso_descripcion', index:'bien_uso_descripcion', width:170,height:20,resizable:false, align:"left"},
                        {name:'tipo_alta', index:'tipo_alta', width:125,height:20,resizable:false},
                        {name:'numero_instrumento', index:'numero_instrumento', align:"right",width:100,height:20,resizable:false,sortable:true},
                        {name:'fecha_instrumento', index:'fecha_instrumento',  align:"left",width:125,height:20,resizable:false},
                        {name:'fecha_incorporacion_movimiento', index:'fecha_incorporacion_movimiento',align:"left",width:140,height:20,resizable:false},                            
                        {name:'cantidad', index:'cantidad', width:130,height:20,hidden:true,resizable:false},
                        {name:'valor_unitario', index:'valor_unitario', width:130,hidden:true,height:20,resizable:false},                            
                        {name:'codigo_patrimonial', index:'codigo_patrimonial', width:75,align:"right",height:20,resizable:false},
                        {name:'estado_de_uso', index:'estado_de_uso', width:155,align:"left",height:20,resizable:false},
                        {name:'accion', index:'accion', width:90,height:20, align:"center",sortable:false, resizable:false}];                        
            cargarGrillaMovimiento(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}
//LISTADO DE FACTURAS
function cargarListaFactura(){
    var table_name='factura'; 
    var table_url=base_url+'/index.php/factura/get_json';    
    var table_sortName='id_factura';
    var table_sorOrder='asc';
    var table_cantPag=10;
    var table_cantList=[10,20,30,40,50];
    var table_colNames=['ID','N° DE FACTURA','DESCRIPCION','N° LLAMADO','MONTO TOTAL','FECHA','TIPO PAGO','PROVEEDOR','ACCIÓN'];
    var table_colModel=[{name:'id_factura', index:'id_factura', width:20, height:20,resizable:false, align:"right",hidden:true},
                        {name:'nro_factura', index:'nro_factura', width:50,height:20,resizable:false, sortable:true, align:"right"},
                        {name:'descripcion', index:'descripcion', width:130,height:20, align:"center"},
                        {name:'nro_llamado', index:'nro_llamado', width:50,height:20, align:"right"},           
                        {name:'monto_total', index:'monto_total',formatter:'currency',hidden:false, width:55,height:20, align:"right", formatoptions:{decimalSeparator:".",thousandsSeparator: ".",decimalPlaces: 0} },           
                        {name:'fecha', index:'fecha',hidden:false, width:40,height:20, align:"left"},           
                        {name:'id_tipo_pago', index:'id_tipo_pago',hidden:true, width:50,height:20, align:"center"},           
                        {name:'id_persona', index:'id_persona', width:65,height:20, align:"center"},                           
                        {name:'accion', index:'accion', width:25,height:20, align:"center",sortable:false, resizable:false}];                        
    cargarGrilla(table_name,table_url,table_sortName,table_sorOrder,table_cantPag,table_cantList,table_colNames,table_colModel);   
}

//RECARGA LA GRILLA DEL DETALLE DE BIENES A MOVER
function reload() {
    var tipo_movimiento = parseInt($('#id_motivo').val() === null ? '' : $('#id_motivo').val());
     var remitente = getRemitente();           
    $("#grilla").jqGrid('setGridParam', {
        url: site_url+'/movimiento/get_json_bienesxpersona?remitente='+remitente+'&tipo_mov='+tipo_movimiento,
        datatype: 'json',
        mtype: 'POST'
    }).trigger('reloadGrid');
}

//VACIA LA GRILLA DEL DETALLE DE BIENES A MOVER
function vaciarGrilla() {
    $("#grilla").jqGrid('clearGridData');
    $("#grilla").jqGrid('setGridParam', {
        url: site_url+'/movimiento/get_json_bienesxpersona?remitente=0&tipo_mov=0',
        datatype: 'json',
        mtype: 'POST'
    }).trigger('reloadGrid');
}

//BUSCADOR DE LA GRILLA DE BIENES A MOVER
function reloadBuscador() {
    var tipo_movimiento = parseInt($('#id_motivo').val() === null ? '' : $('#id_motivo').val());
    var buscar = $('#buscar_detalle_movimiento').val() === null ? '' : $('#buscar_detalle_movimiento').val(); 
    var remitente = getRemitente();             
    $("#grilla").jqGrid('setGridParam', {
        url: site_url+'/movimiento/get_json_bienesxpersona?buscar='+buscar+'&remitente='+remitente+'&tipo_mov='+tipo_movimiento,
        datatype: 'json',
        mtype: 'POST'
    }).trigger('reloadGrid');

}

//BUSCADOR DE LA GRILLA DE BIENES A MOVER
function reloadBuscadorBinesUso() {
    var buscar = $('#buscar_datos').val() === null ? '' : $('#buscar_datos').val(); 
    $("#grilla").jqGrid('setGridParam', {
        url: site_url+'/bien_uso/get_json_baja?buscar='+buscar,
        datatype: 'json',
        mtype: 'POST'
    }).trigger('reloadGrid');
}

//OBTIENE EL ID DEL REMITENTE SELECCIONADO
function getRemitente(){
    var tipo_movimiento = parseInt($('#id_motivo').val() === null ? '' : $('#id_motivo').val());
    var remitente = 0;
    switch (tipo_movimiento){
        case 2:
        case 3:
        case 4:
            remitente = $('#id_deposito_rte').val() === null ? '' : $('#id_deposito_rte').val();
        break;
        case 5:
        case 6:
        case 7:
            remitente = $('#id_persona_rte').val() === null ? '' : $('#id_persona_rte').val();
        break;
        case 8:
        case 9:
        case 10:
            remitente = $('#id_direccion_rte').val() === null ? '' : $('#id_direccion_rte').val();
        break;
        default:
            tipo_movimiento = ''; 
    }
    return remitente;
}