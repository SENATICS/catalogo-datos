<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>

<meta charset="UTF-8">
<style>
    body, html, table{
        padding: 0px;
        margin: 0px;
        font-family: sans-serif;
        overflow-x: hidden;
    }
    table{
        border-spacing: 0px;
        width: 100%;
    }
    .cabecera_seccion{
        padding: 20px;
        box-sizing: border-box;
background: rgba(242,246,248,1);
background: -moz-linear-gradient(-45deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(242,246,248,1)), color-stop(50%, rgba(216,225,231,1)), color-stop(51%, rgba(181,198,208,1)), color-stop(100%, rgba(224,239,249,1)));
background: -webkit-linear-gradient(-45deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
background: -o-linear-gradient(-45deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
background: -ms-linear-gradient(-45deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
background: linear-gradient(135deg, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f6f8', endColorstr='#e0eff9', GradientType=1 );
        font-size: 20px;
        color: #444;
    }
    .servicios_SENATICs{
        width:100%;
        z-index: 9999;
        position: relative;
        -webkit-box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
-moz-box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
    }
    .servicios_SENATICs > thead{
        background: rgba(240,240,240,1);
        color: #444;
    }
    .servicios_SENATICs > thead th{
        padding:10px;   
        box-sizing: border-box;
        border-left: 1px solid #AAA;
    }
    .servicios_SENATICs > tbody td{
        padding:10px;
        box-sizing: border-box;
        vertical-align: top;
    }
    .servicios_SENATICs > tbody .action{
        padding:0 !important;
    }
    .servicios_SENATICs > tbody .enlace{
        padding:10px !important;
        width:100%;
        text-decoration: none;
        display: block;
        color: #207ce5;
        border-top: 2px solid #EEE;
        border-bottom:2px solid #EEE;
        border-left:0px solid #AAA;
        border-right:5px solid #FFF;
        transition: all .4s;

        background: rgba(237,237,237,1);
        background: -moz-linear-gradient(left, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(237,237,237,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(255,255,255,1)));
        background: -webkit-linear-gradient(left, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(left, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(left, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
        background: linear-gradient(to right, rgba(237,237,237,1) 0%, rgba(246,246,246,1) 47%, rgba(255,255,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#ffffff', GradientType=1 );
    }
.enlace img{
vertical-align: top;
}
.estrellas{
margin-left:15px;
margin-right:10px;
display:inline-block;
}
    .servicios_SENATICs > tbody .enlace:hover{
        border-left:5px solid #207ce5;
        border-right:0px solid #000;
    }
    
    .servicios_SENATICs > tbody tr{
        transition: all .4s;
        background: rgba(230,230,230,.8) !important;
    }
    .servicios_SENATICs > tbody tr:hover{
        transition: all .4s;
        background: rgba(250,250,250,.8) !important;
    }
    .servicios_SENATICs > tbody tr:hover td{
        border-top: 1px solid #DDD;
        border-bottom: 1px solid #DDD;
    }
    .servicios_SENATICs > tbody > tr > td{
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
        border-left: 1px solid #DDD;
    }
    .servicios_SENATICs > tbody > tr > td thead th{
        background: rgba(242,246,248,1);
        padding: 10px;
        color: #444;
        text-align: left;
        font-size: 12px;
        background: -moz-linear-gradient(top, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(242,246,248,1)), color-stop(50%, rgba(216,225,231,1)), color-stop(51%, rgba(181,198,208,1)), color-stop(100%, rgba(224,239,249,1)));
        background: -webkit-linear-gradient(top, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
        background: -o-linear-gradient(top, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
        background: -ms-linear-gradient(top, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
        background: linear-gradient(to bottom, rgba(242,246,248,1) 0%, rgba(216,225,231,1) 50%, rgba(181,198,208,1) 51%, rgba(224,239,249,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f6f8', endColorstr='#e0eff9', GradientType=0 );
    }
    .servicios_SENATICs > tbody > tr > td tbody td{
        font-size: 12px;
        color:#444;
        border-top: 1px solid #DDD;
        border-left: 1px solid #EEE;
    }
    .accion{
        padding: 0 !important;  
        width: 200px;
    }
</style>
<div class="cabecera_seccion">
<a href="<?php echo base_url()."datos" ?>"><<</a>
   <h1><?= $title ?></h1>
   <?php if ($datos_tabla != '') { ?>
</div>

<table class="servicios_SENATICs" border="0" >
	<tbody>
		<tr itemprop="dataset" itemscope itemtype="https://schema.org/Dataset">
        <td style="display:none;">
            <label itemprop="url" style="display:none;">$URL_FUENTE.getData()</label>
            <label itemprop="license" style="display:none;">$LICENCIA.getData()</label>
            <label itemprop="keywords" style="display:none;">$ETIQUETAS.getData()</label>
            <label itemprop="version" style="display:none;">$VERSION.getData()</label>
        </td>
			<td class="action">
                <table>
                    <thead>
                        <tr>
                            <th><?php echo $group ?></th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($group_recursos as $row) {	?>
                            <tr itemprop="distribution" itemscope="" itemtype="https://schema.org/DataDownload">
                                <td itemprop="name"><?php echo $row->$group; ?></td>
                                <td itemprop="description"><?php echo "Conjunto de Datos correspondiente a <b>".$name." </b> del ".$group." ".$row->$group; ?></td>
                                <td class="accion">                                    
                                    <a href="<?php echo base_url().'datos/data/'.$tabla.'/'.$row->$group.'.csv' ?>">
                                        <div class="enlace">
											<div class="estrellas">CSV                              
												<meta itemprop="url" content="$archivo.getData()">
		                                        <meta itemprop="encodingFormat" content="$archivo.getChildren().get(0).getData()">
		                                        <meta itemprop="license" style="display: none;" content="$LICENCIA.getData()" />
	                                           <?php for ($i=0; $i <3 ; $i++) { ?>
		                                        	 <img alt="Star" src="http://www.paraguay.gov.py/documents/10179/519993/start/be848481-de7d-4c35-9f7d-662516964fff?t=1437571393000" style="width:12px;padding-bottom:10px;"/>
		                                      <?php  } ?>
											</div>
										</div>
									</a>

                                    <a href="<?php echo base_url().'datos/data/'.$tabla.'/'.$row->$group.'.json' ?>">
                                        <div class="enlace">
											<div class="estrellas">JSON                              
												<meta itemprop="url" content="$archivo.getData()">
		                                        <meta itemprop="encodingFormat" content="$archivo.getChildren().get(0).getData()">
		                                        <meta itemprop="license" style="display: none;" content="$LICENCIA.getData()" />
		                                        <?php for ($i=0; $i <3 ; $i++) { ?>
		                                        	 <img alt="Star" src="http://www.paraguay.gov.py/documents/10179/519993/start/be848481-de7d-4c35-9f7d-662516964fff?t=1437571393000" style="width:12px;padding-bottom:10px;"/>
		                                      <?php  } ?>
	                                           
											</div>
										</div>
									</a>                                    
                                </td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
			</td>
		</tr>
	</tbody>
</table>
	<?php } ?>	



	<!-- 
			<?php 
			
				foreach ($datos_tabla as $row)
				{	

					foreach ($nombre_columna as $columna){
						$var = $columna->column_name;
						echo $row->$var." ";
						//echo $columna->column_name." ";
						
					
					}
					echo '<br>';
				} ?> -->
		



