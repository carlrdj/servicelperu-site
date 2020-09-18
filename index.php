<?php
session_start();
//  error_reporting(0);
// require_once 'model/database.php';
require 'config.php';
if (isset($_GET['c']) && isset($_GET['a'])) {
    if ($_REQUEST['c'] AND ! isset($_REQUEST['a'])) {
        $_REQUEST['a'] = $_REQUEST['c'];
    }
    $controller = strtolower($_REQUEST['c']);
    $accion = isset($_REQUEST['a']) ? $_REQUEST['a'] : 'Index';
    $accion = str_replace('-', '_', $accion);
    require_once "controllers/$controller.controller.php";
    $controller = ucwords($controller) . 'Controller';
    $controller = new $controller;
    call_user_func(array($controller, $accion));
} else if (isset($_GET['c'])) {
    $controller = $_GET['c'];
    require_once "controllers/$controller.controller.php";
    $controller = ucwords($controller) . 'Controller';
    $controller = new $controller;
    $controller->Index();
} else {
    $controller = "index";
    require_once "controllers/$controller.controller.php";
    $controller = ucwords($controller) . 'Controller';
    $controller = new $controller;
    $controller->Index();
}