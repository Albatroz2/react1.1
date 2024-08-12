const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmE0NTY0NjM0ODRhYTM2YjVhODgxMWRhZDhmOGIwOSIsIm5iZiI6MTcyMzQyNDEyOC45MTI5MDcsInN1YiI6IjY1NDQ4ZmE5OWNjNjdiMDEzYTMwMWE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gyTX3VxqV67us2H0iLMHTn5Em-UtfJhtl5yGXjtzgqc",
            
    }).then((result) => result.json());
}
