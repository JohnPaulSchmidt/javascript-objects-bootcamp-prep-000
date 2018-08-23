

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Here\'s to the State of Mississippi'] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.Slowdive;
  return playlist
}