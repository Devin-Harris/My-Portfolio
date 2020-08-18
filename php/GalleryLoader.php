<?php
    if(isset($_POST['name'])) {
        $name = $_POST['name']; 
    }

    switch ($name) {
        case 'logos':
            $path = '../assets/Galleries/logos';
            break;
        case 'illustrations':
            $path = '../assets/Galleries/illustrations';
            break;
        case 'ads':
            $path = '../assets/Galleries/ads';
            break;
        case 'photos':
            $path = '../assets/Galleries/photos';
            break;
        default:
            break;
    }

    $files = scandir($path);
    
    echo json_encode($files);