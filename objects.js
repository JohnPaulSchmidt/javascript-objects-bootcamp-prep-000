var playlist = {'Phil Ochs': 'Here\'s to the State of Mississippi'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Here\'s to the State of Mississippi'] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.slowdive;
}