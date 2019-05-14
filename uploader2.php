<?php

$uploaddir = "/var/www/uploads/";
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "Upload succeed.\n";
} else {
    echo "Upload failed.\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);

print "</pre>";

?>