<?php

//require_once 'model/product.php';

class IndexController {

    //private $modelproduct;

    public function __CONSTRUCT() {
        //$this->modelproduct = new Product();
    }

    public function Index() {
        require_once 'views/layouts/landing/header.php';
        require_once 'views/pages/index.php';
        require_once 'views/layouts/landing/footer.php';
    }

}