<?php

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$id = mysqli_real_escape_string($db_conn, trim($data->id));

$movie = mysqli_query($db_conn, "SELECT * FROM moviesdb.movies WHERE id=$id ");
if (mysqli_num_rows($movie) > 0) {
    while ($row_movie = $movie->fetch_assoc()) {
        $json_array = array(
            'id' => $row_movie['id'],
            'title' => $row_movie['title'],
            'year' => $row_movie['year'],
            'description' => $row_movie['description'],
            'image_url' => $row_movie['image_url']
        );
    }
    echo json_encode($json_array);
    return;
} else {
    echo json_encode(["success" => false]);
    return;
}
