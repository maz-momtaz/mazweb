<?php
  class Pages extends Controller {
    public function __construct(){

    }
    
    public function index(){
      
      $data = [
        'page-title' => 'HOMEPAGE'
      ];
     
      $this->view('pages/index', $data);
    }
  }