function getEpisodes(id) {
    let response;
    fetch(`http://api.tvmaze.com/shows/${id}/episodes?specials=1`)
        .then(response => response.json())
        .then(jsonData => { response = jsonData })
        .catch(error => { response = error })
    return response
};

export default getEpisodes
