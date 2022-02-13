<?php

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->title)
    && isset($data->year)
    && isset($data->desc)
    && !empty(trim($data->title))
    && !empty(trim($data->year))
    && !empty(trim($data->desc))
) {

    $title = mysqli_real_escape_string($db_conn, trim($data->title));
    $year = mysqli_real_escape_string($db_conn, trim($data->year));
    $desc = mysqli_real_escape_string($db_conn, trim($data->desc));
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $current = date("Y-m-d h:i:sa");

    // ok
    $update = mysqli_query($db_conn, "UPDATE moviesdb.movies SET
                           title= '$title', year= '$year', description= '$desc' ,updated_date= '$current' WHERE id= '$id'");
    if ($update) {
        echo json_encode(["success" => true]);
        return;
    } else {
        echo json_encode(["success" => false, "error" => "Server Problem. Please Try Again"]);
        return;
    }
} else {
    echo json_encode(["success" => false, "error" => "Please fill all the required fields!"]);
    return;
}
