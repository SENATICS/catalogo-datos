<?php

class Datasets_model extends CI_Model {
	
	function __construct(){
		parent::__construct();
	}
	
	//lista datos
	public function getAllData($tabla){	
	    		
		$this->db->select('*');
		$this->db->from($tabla);	
		// $this->db->order_by("id", "asc"); //si queremos aplicar un orden utilizamos esta funcion
	    return $this->db->get();
	} 
	public function getAll($tabla,$where){
	    		
		$this->db->select('*');
		$this->db->from($tabla);	
		// $this->db->order_by("id", "asc"); //si queremos aplicar un orden utilizamos esta funcion
		if($where != NULL){	    
	    	$this->db->where('mes',$where);
		}
	    return $this->db->get();
	}

	public function getGroup($tabla,$group){
		if ($this->isGroup($tabla,$group)!= '') {
			$this->db->select($group);
			$this->db->from($tabla);	
			$this->db->group_by($group); 
			$this->db->order_by($group, "asc");
		    return $this->db->get();
		}else {
			return NULL;
		}
		

	} 
	public function isGroup($tabla,$group){
	
		$this->db->select('column_name');
		$this->db->from('information_schema.columns');		
		$this->db->where('table_name',$tabla);	
		$this->db->where("column_name='".$group."'");
	    return $this->db->get();

	} 
	

	
	public function getTables(){

		$this->db->select('table_name');
		$this->db->from('information_schema.tables');		
		$this->db->where('table_schema','public');	
		$this->db->where('table_type','BASE TABLE');
	    return $this->db->get();
	}

	public function getNameColumns($tabla){
	 
		$this->db->select('column_name');
		$this->db->from('information_schema.columns');		
		$this->db->where('table_name',$tabla);	
	    return $this->db->get();

	}

}


?>