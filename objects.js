var playlist = {'Jeff Buckley': 'Lover, You Should Have Come Over'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Lover, You Should Have Come Over'] = songTitle
  return updatePlaylist()
}