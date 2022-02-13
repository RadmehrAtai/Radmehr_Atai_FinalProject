<?php

require 'db_connection.php';

$allMovies = mysqli_query($db_conn, "SELECT * FROM moviesdb.movies order by id desc");
if (mysqli_num_rows($allMovies) > 0) {
    while ($row_movies = mysqli_fetch_array($allMovies)) {
        $json_array[] = array(
            'id' => $row_movies['id'],
            'title' => $row_movies['title'],
            'year' => $row_movies['year'],
            'image_url' => $row_movies['image_url']
        );
    }
    echo json_encode($json_array);
    return;
} else {
    echo json_encode(["success" => false]);
    return;
}
