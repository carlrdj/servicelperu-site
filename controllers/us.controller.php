<?php

class UsController {

    public function __CONSTRUCT() {
    }

    public function Index() {
        require_once 'views/layouts/landing/header.php';
        require_once 'views/pages/us.php';
        require_once 'views/layouts/landing/footer.php';
    }

}