<?php

class ServiceTiController {

    public function __CONSTRUCT() {
    }

    public function Index() {
        require_once 'views/layouts/landing/header.php';
        require_once 'views/pages/service-ti.php';
        require_once 'views/layouts/landing/footer.php';
    }

}