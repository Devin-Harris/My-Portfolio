<?php
    $path = '../assets/Galleries/logos';
    $files = scandir($path);
    
    echo json_encode($files);
?>