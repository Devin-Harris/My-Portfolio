<?php
    $path = '../assets/Galleries/illustrations';
    $files = scandir($path);
    
    echo json_encode($files);
?>