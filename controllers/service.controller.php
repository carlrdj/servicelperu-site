<?php

class ServiceController {

    public function __CONSTRUCT() {
    }

    public function Index() {
        require_once 'views/layouts/landing/header.php';
        require_once 'views/pages/service.php';
        require_once 'views/layouts/landing/footer.php';
    }

}