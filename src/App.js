import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists, discover_weekly }, dispatch] =
    useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E37icu25jebi9").then((response) => {
        console.log(response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    console.log("I have a token ", token);
    console.log("playlists", playlists);
    console.log("discover_weekly", discover_weekly);
  }, []);
  console.log("person", user);
  console.log("token", token);
  console.log("discover_weekly", discover_weekly);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
//125415f518c64aff87aebbd06cdd99ef
