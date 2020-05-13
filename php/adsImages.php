<?php
    $path = '../assets/Galleries/ads';
    $files = scandir($path);
    
    echo json_encode($files);
?>