<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>

	<style>
	   table{
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
	        color: #444;
	    }
	    .servicios_SENATICs{
	        width:100%;
	        margin: 0 auto;
	        position: relative;
	        -webkit-box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
			-moz-box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
			box-shadow: 0px -18px 27px -13px rgba(0,0,0,0.15);
	    }
	    .servicios_SENATICs > thead{
	        color: #444;
	    }
	    .servicios_SENATICs > thead th{
	        padding:10px;   
	        box-sizing: border-box;
	    }
	    .servicios_SENATICs > tbody td{
	        padding:10px;
	        box-sizing: border-box;
	        vertical-align: top;
	    }
	    .servicios_SENATICs > tbody .action{
	        padding:0 !important;
	    }
	    .servicios_SENATICs > tbody .enlace_desc{
	        padding:10px !important;
	        text-decoration: none;
	        color: #222;
	        width: 49%;
	        display: inline-block;
	        border-top: 2px solid #EEE;
	        border-bottom:2px solid #EEE;
	        border-left:5px solid #CCC;
	        transition: all .4s;
	        box-sizing: border-box;
	        padding-right: 20px;
	        background: rgba(153, 210, 146,.5) url(http://www.paraguay.gov.py/documents/10179/12299/icon_descarga.png/012c15e3-d823-4645-a282-b39c757666a0?t=1439306525000);
	        background-position: right center;
	        background-repeat: no-repeat;
	        background-size: contain;
	    }
	    .servicios_SENATICs > tbody .enlace_desc:hover{
	        border-left:5px solid rgba(153, 210, 146,1);
	        padding-left: 20px !important;
	        padding-right: 0px !important;
	    }
	    .servicios_SENATICs > tbody .enlace_dicc{
	        padding:10px !important;
	        text-decoration: none;
	        color: #222;
	        width: 49%;
	        display: inline-block;
	        border-top: 2px solid #EEE;
	        border-bottom:2px solid #EEE;
	        border-left:5px solid #CCC;
	        transition: all .4s;
	        box-sizing: border-box;
	        padding-right: 20px;
	        background: rgba(146, 185, 210,.5) url(http://www.paraguay.gov.py/documents/10179/12299/icon_diccionario.png/a38ae528-c616-4cba-bd60-152f821f37de?t=1439306525000);
	        background-position: right center;
	        background-repeat: no-repeat;
	        background-size: contain;
	    }
	    .servicios_SENATICs > tbody .enlace_dicc:hover{
	        border-left:5px solid rgba(146, 185, 210,1);
	        padding-left: 20px !important;
	        padding-right: 0px !important;
	        transition: all .4s;
	    }
	    
	    .servicios_SENATICs > tbody > tr{
	        background: rgba(240,240,240,1) !important;
	        transition: all .4s;
	        transition: all .4s;
	    }
	    .servicios_SENATICs > tbody > tr:hover{
	        background: rgba(250,250,250,1) !important;
	        transition: all .4s;
	    }
	    .servicios_SENATICs > tbody > tr:hover > td{
	        background: rgba(250,250,250,1) !important;
	        border-top: 1px solid #DDD;
	        border-bottom: 1px solid #DDD;
	        transition: all .4s;
	    }
	    .servicios_SENATICs > tbody > tr > td{
	        border: 1px solid #DDD;
	        background: rgba(240,240,240,1) !important;
	        transition: all .4s;
	    }
	    .servicios_SENATICs > tbody > tr > td thead th{
	            background: rgba(242,246,248,1);
	        padding: 5px;
	        color: #444;
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
	        color:~#444;
	        transition: all .4s;
	        border-top: 1px solid #DDD;
	    }

	    /* Popup */
	    .boton_ventana ol, .boton_ventana ul {
			list-style: none;
		}
		.boton_ventana blockquote, .boton_ventana q {
			quotes: none;
		}
		.boton_ventana blockquote:before, .boton_ventana blockquote:after,
		.boton_ventana q:before, .boton_ventana q:after {
			content: '';
			content: none;
		}
		.boton_ventana table {
			border-collapse: collapse;
			border-spacing: 0;
		}
		
		.boton_ventana .cf:before,
		.boton_ventana .cf:after {
			content:"";
			display:table;
		}
		.boton_ventana .cf:after {
			clear:both;
		}
		
		.boton_ventana {
			background-color: #f6f6f6;
			background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(246, 246, 246)), to(rgb(225, 225, 225)));
			background-image: -webkit-linear-gradient(top, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -moz-linear-gradient(top, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -o-linear-gradient(top, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -ms-linear-gradient(top, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: linear-gradient(top, rgb(246, 246, 246), rgb(225, 225, 225));
			filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#f6f6f6', EndColorStr='#e1e1e1');
			border: 1px solid #ccc;
			color:#555;
			display:inline-block;
	        z-index: 99999;
			padding:10px 15px;
			text-decoration:none;
			text-shadow:0 2px rgba(255,255,255,.9);
			border-radius:20px;
			-moz-border-radius:20px;
			-webkit-border-radius:20px;
			box-shadow:0 1px rgba(0,0,0,.35);
			-moz-box-shadow:0 1px rgba(0,0,0,.35);
			-webkit-box-shadow:0 1px rgba(0,0,0,.35);
		}
		.boton_ventana:active {
			background-color: #f6f6f6;
			background-image: -webkit-gradient(linear, left bottom, left top, from(rgb(246, 246, 246)), to(rgb(225, 225, 225)));
			background-image: -webkit-linear-gradient(bottom, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -moz-linear-gradient(bottom, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -o-linear-gradient(bottom, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: -ms-linear-gradient(bottom, rgb(246, 246, 246), rgb(225, 225, 225));
			background-image: linear-gradient(bottom, rgb(246, 246, 246), rgb(225, 225, 225));
			filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#f6f6f6', EndColorStr='#e1e1e1');
		}
			
			
		@media only screen and (min-width: 769px) {	
			.venta_general {
				left:50%;
				margin:-250px 0 0 -40%;
				opacity: 0;
				top:45%;
				position:fixed;
				z-index:888;
				visibility: hidden;
				width:80%;
				box-shadow:0 3px 7px rgba(0,0,0,.25);
				box-sizing:border-box;
			}
			.venta_general:target {
				opacity: 1;
				top:45%;
	            z-index: 999999;
				visibility: visible;
			}
		}
		@media only screen and (max-width: 768px) {
			.venta_general {
				width:100%;
				height:100%;
				position:fixed;
				opacity: 0;
				z-index:888;
				visibility: hidden;
				margin:0px;
				left:0;
				top:20px;
	            z-index: 999999;
				box-sizing:border-box;
			}
			.venta_general:target {
				opacity: 1;
				visibility: visible;
	            z-index: 999999;
			}
		}
		.venta_general .header,.venta_general .footer {
			border-bottom: 1px solid #e7e7e7;
			border-radius: 10px 10px 0 0;
		}
			.venta_general .footer {
				border:none;
				border-top: 1px solid #e7e7e7;
				border-radius: 0 0 10px 10px;
			}
		.venta_general h2 {
			margin:0;
		}
		.venta_general .boton_ventana {
			float:right;
			margin-top:-20px;
		}
		.venta_general .ventana,.venta_general .header, .venta_general .footer {
			padding:15px;
		}
		.ventana-contenido {
			background: #f7f7f7;
			position: relative;
			z-index: 20;
			border-radius:10px;
		}
		.venta_general .ventana {
			background: #fff;
			overflow:auto;
		}
		
		.venta_general .overlay {
			background: rgba(0,0,0,.5);
			height: 100%;
			left: 0;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 10;
		}
	    
	    @media only screen and (min-width: 769px) {	
			.venta_general {
				left:42%;
				margin:-10px 0 0 -40%;
				opacity: 0;
				top:15%;
				position:fixed;
				z-index:888;
				visibility: hidden;
				width:96%;
				box-shadow:0 3px 7px rgba(0,0,0,.25);
				box-sizing:border-box;
			}
			.venta_general:target {
				opacity: 1;
				top:5%;
				visibility: visible;
			}
		}
		@media only screen and (max-width: 768px) {
			.venta_general {
				width:100%;
				height:100%;
				position:absolute;
				padding:20px !important;
				box-sizing:border-box;
				opacity: 0;
				z-index:888;
				visibility: hidden;
				margin:0px;
				left:0;
				top:10px;
				box-sizing:border-box;
			}
			.venta_general:target {
				opacity: 1;
				visibility: visible;
			}
		}
		.venta_general .header,.venta_general .footer {
			border-bottom: 1px solid #e7e7e7;
			border-radius: 10px 10px 0 0;
		}
			.venta_general .footer {
				border:none;
				border-top: 1px solid #e7e7e7;
				border-radius: 0 0 10px 10px;
			}
		.venta_general h2 {
			margin:0;
		}
		.venta_general .boton_ventana {
			float:right;
			margin-top:-20px;
		}
		.venta_general .ventana,.venta_general .header, .venta_general .footer {
			padding:15px;
		}
		.ventana-contenido {
			background: #f7f7f7;
			position: relative;
			z-index: 20;
			border-radius:10px;
		}
		.venta_general .ventana {
			background: #fff;
			overflow:auto;
	        max-height: 600px;
		}
		
		.venta_general .overlay {
			background-color: #000;
			background: rgba(0,0,0,.5);
			height: 100%;
			left: 0;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 10;
		}

		.servicios_SENATICs > tbody .action{
	        padding:0 !important;
	        width: 290px;
	    }

	    .servicios_SENATICs > tbody .enlace_dicc:hover{
	        border-left:5px solid #207ce5;
	        padding-left: 20px !important;
	    }
	    .servicios_SENATICs > tbody > tr:hover{
	        background: rgba(0,0,0,.05);
	    }
	    .servicios_SENATICs > tbody > tr:hover > td{
	        border-top: 1px solid #DDD;
	        border-bottom: 1px solid #DDD;
	    }
	    .servicios_SENATICs > tbody > tr > td{
	        border-top: 1px solid #EEE;
	        border-bottom: 1px solid #EEE;
	        border-left: 1px solid #DDD;
	    }

		</style>
	<h1>Conjunto de Datos:</h1>

		
	<table class="servicios_SENATICs cabecera_seccion" border="0" >

		<thead>
			<tr>
				<th>Servicio</th>
				<th>Descripción</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody itemscope itemtype="https://schema.org/DataCatalog">
			<tr>
				<td itemprop="name" style="display: none;">Datos Abiertos del Portal Paraguay</td>
				<td itemprop="description" style="display: none;">Datos Abiertos del Portal Paraguay administrado por la SENATICs</td>
				<td itemprop="url" style="display: none;">http://www.paraguay.gov.py/datos</td>
				<td itemprop="license" style="display: none;">https://creativecommons.org/licenses/by/4.0/legalcode</td>
			</tr>


				<!-- Inicio Conjuntos de Datos -->
				<tr itemprop="dataset" itemscope itemtype="https://schema.org/Dataset">
					<td itemprop="name">Consultas Ciudadanas</td>
					<td itemprop="description">Consultas ciudadanas registradas en el portal paraguay</td>
					<td itemprop="provider" itemscope itemtype="https://schema.org/Organization" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="url" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="creator" itemscope itemtype="https://schema.org/Person" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="url" style="display: none;"> </td>
					<td class="action">
						<a class="enlace_desc" href="<?php echo base_url()."datos/consultas" ?>">Descarga</a>
		                <a class="enlace_dicc" href="#">Diccionario</a>
					</td>
				</tr>
				<!-- Fin conjunto de Datos -->
				<!-- Inicio Conjuntos de Datos -->
				<tr itemprop="dataset" itemscope itemtype="https://schema.org/Dataset">
					<td itemprop="name">Funcionarios</td>
					<td itemprop="description">Listado de funcionarios</td>
					<td itemprop="provider" itemscope itemtype="https://schema.org/Organization" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="url" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="creator" itemscope itemtype="https://schema.org/Person" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="url" style="display: none;"> </td>
					<td class="action">
						<a class="enlace_desc" href="<?php echo base_url()."datos/funcionarios" ?>">Descarga</a>
		                <a class="enlace_dicc" href="#">Diccionario</a>
					</td>
				</tr>
				<!-- Fin conjunto de Datos -->
				<!-- Inicio Conjuntos de Datos -->
				<tr itemprop="dataset" itemscope itemtype="https://schema.org/Dataset">
					<td itemprop="name">Empleados</td>
					<td itemprop="description">Descripcion</td>
					<td itemprop="provider" itemscope itemtype="https://schema.org/Organization" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="url" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="creator" itemscope itemtype="https://schema.org/Person" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="url" style="display: none;"> </td>
					<td class="action">
						<a class="enlace_desc" href="<?php echo base_url()."datos/empleados" ?>">Descarga</a>
		                <a class="enlace_dicc" href="#">Diccionario</a>
					</td>
				</tr>
				<!-- Fin conjunto de Datos -->
				<!-- Inicio Conjuntos de Datos -->
				<tr itemprop="dataset" itemscope itemtype="https://schema.org/Dataset">
					<td itemprop="name">Clasificación</td>
					<td itemprop="description">Categorias utilizadas en el portal</td>
					<td itemprop="provider" itemscope itemtype="https://schema.org/Organization" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="url" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="creator" itemscope itemtype="https://schema.org/Person" style="display: none;">
						<meta itemprop="name" content="">
						<meta itemprop="email" content="">
					</td>
					<td itemprop="url" style="display: none;"> </td>
					<td class="action">
						<a class="enlace_desc" href="<?php echo base_url()."datos/clasificacion" ?>">Descarga</a>
		                <a class="enlace_dicc" href="#">Diccionario</a>
					</td>
				</tr>
				<!-- Fin conjunto de Datos -->

			</tbody>
	</table>

