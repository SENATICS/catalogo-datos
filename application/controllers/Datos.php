<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Datos extends CI_Controller {

	function __construct(){
		parent::__construct();	
		$this->load->helper(array('form', 'url'));
		$this->load->model('Datasets_model');	
		$this->load->dbutil();			
	}

	public function index(){	
		$data['tablas'] = $this->Datasets_model->getTables()->result();
		$data['content'] = 'datos';
		$this->load->view('template', $data);
	}

	public function def(){			
		$data['titulo'] = $this->uri->segment('3');
		$data['valor1'] = $this->uri->segment('4');
		$data['tablas'] = $this->Datasets_model->getTables()->result();
		$data['content'] = 'definiciones';
		$this->load->view('template', $data);
	}

	public function mostrarDato($method,$agrupar,$data){			
		$data['name'] = $method;
		$data['group'] = $agrupar;
		$data['group_recursos'] = $this->Datasets_model->getGroup($method,$agrupar)->result();
		$data['datos_tabla'] = $this->Datasets_model->getAllData($method)->result();
		$data['nombre_columna'] = $this->Datasets_model->getNameColumns($method)->result();
		$data['content'] = 'recursos';//este campo hace referencia al nombre del view
		$this->load->view('template', $data);
	}

	public function _remap($method){
	    switch ($method) {
	    	case 'index':
	    		$this->$method();
	    		break;
	    	case 'def':
	    		$this->$method();
	    		break;
	    	case 'data':
	    		$this->$method();
	    		break;
	    	case 'clasificacion':
	    		if ($this->uri->segment('3')=='') {
	    			$data['tabla']='clasificacion';
    				$data['title'] = 'Clasificacion';
    				$data['descripcion'] = 'descripcion de la clasificacion';
	    			$agrupar = 'mes';//campo por el cual se agruparan los conjunto de datos (mes, anho)

					$this->mostrarDato($method,$agrupar,$data);
					
				}else{
					if ($this->uri->segment('3')) {
						# code...
					}
				}
				
	    		break;
	    	case 'funcionarios':
	    		if ($this->uri->segment('3')=='') {
	    			$data['tabla']='funcionarios';
	    			$data['title'] = 'Funcionarios';
    				$data['descripcion'] = 'Listado de Funcionarios';
	    			$agrupar = 'mes';//campo por el cual se agruparan los conjunto de datos (mes, anho)

					$this->mostrarDato($method,$agrupar,$data);
				}else{
					if ($this->uri->segment('3')) {
						# code...
					}
				}
				
	    		break;
	    	case 'empleados':
	    		if ($this->uri->segment('3')=='') {
    				$data['title'] = 'Empleado';
    				$data['descripcion'] = 'Listado de empleados';
	    			$agrupar = 'mes';//campo por el cual se agruparan los conjunto de datos (mes, anho)	    			
	    			$data['tabla']='empleados';

					$this->mostrarDato($method,$agrupar,$data);
				}else{
					if ($this->uri->segment('3')) {
						# code...
					}
				}
				
	    		break;
	    	case 'consultas':
	    		if ($this->uri->segment('3')=='') {
	    			$data['tabla']='consultas';
    				$data['title'] = 'Consultas Ciudadanas';
    				$data['descripcion'] = 'Consultas ciudadanas realizadas en el Portal Paraguay';
	    			$agrupar = 'mes';//campo por el cual se agruparan los conjunto de datos (mes, anho)

					$this->mostrarDato($method,$agrupar,$data);
				}else{
					if ($this->uri->segment('3')) {
						# code...
					}
				}
				
	    		break;
	    	default:
				$data['heading'] = 'Página no encontrada';
				$data['message'] = 'No existe el Conjunto de Datos';

				$this->load->view('errors/html/error_404', $data);
				break;
	    }
	}



	public function data() {

		if ($this->uri->segment('3')=='') {
			$data['tablas'] = $this->Datasets_model->getTables()->result();
			$data['content'] = 'datos';
			$this->load->view('template', $data);
		}else{

			$formato = explode(".", $this->uri->segment('4'));

			$result = $this->Datasets_model->getAll($this->uri->segment('3'),$formato[0]);

			$name = $this->uri->segment('3').'_'.$formato[0].'.'.$formato[1];					

			if($formato[1] == 'csv'){			
				
				$delimiter = ",";
				$newline = "\r\n";
				$data = $this->dbutil->csv_from_result($result, $delimiter, $newline);

			}else if ($formato[1] == 'json'){
					$data = json_encode($result->result());
				}
					force_download($name, $data);
			}
		}


}

