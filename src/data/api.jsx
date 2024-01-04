const API = "https://api.themoviedb.org/3";

export function getMovie(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTNmNDIyZWUzNzNkZTcyYTBiNDQ3N2MwOTllNjAyMSIsInN1YiI6IjYyZTdjZjVjN2NhYTQ3MDA1YjM0MTZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7dZx5wDaR9EEDDPa0Lps6mXS20-iTCJX_YESjxvYX9s",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}