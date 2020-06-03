export const setUser = user => {
    return{
        type:"SET_USER",
        payload: user
    }
}

export const setTrack = (track) => {
    return{
        type:"SET_TRACK",
        payload: track
    }
}

export const setPlaylist = (playlist) => {
    return{
        type:"SET_PLAYLIST",
        payload: playlist
    }
}

export const setRecent = (recent) => {
    return{
        type:"SET_RECENT",
        payload: recent
    }
}