<?php

class Contact {

    public $fullname;
    public $email;
    public $phone;
    public $business_name;
    public $date;
    public $range_hours;
    public $contact;
    public $comment;

    public function __CONSTRUCT() {
    }

    public function SendQuestion($data) {
        try {            
            ini_set( 'display_errors', 1 );
            error_reporting( E_ALL );
            $from = "test@hostinger-tutorials.com";
            $to = "test@hostinger.com";
            $subject = "Checking PHP mail";
            $message = "PHP mail works just fine";
            $headers = "From:" . $from;
            mail($to,$subject,$message, $headers);
            echo "The email message was sent.";
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

}
