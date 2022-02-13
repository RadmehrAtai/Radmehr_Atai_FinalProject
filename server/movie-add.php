<?php

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

$title = mysqli_real_escape_string($db_conn, trim($data->title));
$year = mysqli_real_escape_string($db_conn, trim($data->year));
$desc = mysqli_real_escape_string($db_conn, trim($data->desc));
$image_url = mysqli_real_escape_string($db_conn, trim($data->image_url));
$created_date = date("Y-m-d h:i:sa");
$updated_date = null;
$add = mysqli_query($db_conn, "INSERT INTO moviesdb.movies (title, year, description, image_url, created_date, updated_date) 
    values('$title','$year','$desc','$image_url','$created_date','$updated_date')");
if ($add) {
    $last_id = mysqli_insert_id($db_conn);
    echo json_encode(["success" => true, "newids" => $last_id]);
    return;
} else {
    echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
    return;
}
