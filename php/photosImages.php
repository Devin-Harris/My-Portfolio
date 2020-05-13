<?php
    $path = '../assets/Galleries/photos';
    $files = scandir($path);
    
    echo json_encode($files);
?>