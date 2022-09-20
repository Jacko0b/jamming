import './App.css';
import React from 'react'
import {SearchResults} from '../SearchResults/SearchResults'
import { SearchBar } from '../SearchBar/SearchBar';
import {Playlist} from '../Playlist/Playlist'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      searchResults: [{name:'placeholderName',artist:'placeholderArtist',album:'placeholderAlbum',id:-1},{name:'placeholderName2',artist:'placeholderArtist2',album:'placeholderAlbum2',id:-2},{name:'placeholderName3',artist:'placeholderArtist3',album:'placeholderAlbum3',id:-3}],      
      playlistName: 'placeholderPlaylist',
      playlistTracks:[{name:'placeholderName',artist:'plac7eholderArtist',album:'placeholderAlbum',id:-69},{name:'placeholderName2',artist:'placeholderArtist2',album:'placeholde5rAlbum2',id:-420}]
    }
    this.addTrack= this.addTrack.bind(this)
    this.removeTrack= this.removeTrack.bind(this)
    this.updatePlaylistName= this.updatePlaylistName.bind(this)
    this.savePlaylist= this.savePlaylist.bind(this)
  }
  addTrack(track){
    let playlist = this.state.playlistTracks
    if (playlist.find(playlistTrack => playlistTrack.id === track.id)){
      return
    }
    this.setState({playlistTracks: [...playlist , track]})
  }
  removeTrack(track){
    let playlist = this.state.playlistTracks
    playlist = playlist.filter(playlistTrack => playlistTrack.id !== track.id)
    this.setState({playlistTracks: playlist})
  }
  updatePlaylistName(name){
    this.setState({playlistName: name})
  }
  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
  }
  search(term){
    console.log(term)
  }
  render(){
    return (
      <div>
        
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className='App'>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
