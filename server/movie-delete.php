<?php

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$id = mysqli_real_escape_string($db_conn, trim($data->id));
$deleteMovie = mysqli_query($db_conn, "DELETE FROM moviesdb.movies WHERE id=$id ");
if ($deleteMovie) {
    echo json_encode(["success" => true]);
    return;
} else {
    echo json_encode(["success" => false]);
    return;
}
