<?php

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$value = mysqli_real_escape_string($db_conn, trim($data->value));
if (is_numeric($value) && strlen($value) == 4) {
    $movie = mysqli_query($db_conn, "SELECT * FROM moviesdb.movies WHERE year='$value'");
    if (mysqli_num_rows($movie) > 0) {
        while ($row_movie = mysqli_fetch_array($movie)) {
            $json_array[] = array(
                'id' => $row_movie['id'],
                'title' => $row_movie['title'],
                'year' => $row_movie['year'],
                'image_url' => $row_movie['image_url']
            );
        }
        echo json_encode($json_array);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
} else { // ok
    $movie = mysqli_query($db_conn, "SELECT * FROM moviesdb.movies WHERE movies.title LIKE '$value%'");
    if (mysqli_num_rows($movie) > 0) {
        while ($row_movie = mysqli_fetch_array($movie)) {
            $json_array[] = array(
                'id' => $row_movie['id'],
                'title' => $row_movie['title'],
                'year' => $row_movie['year'],
                'image_url' => $row_movie['image_url']
            );
        }
        echo json_encode($json_array);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}

