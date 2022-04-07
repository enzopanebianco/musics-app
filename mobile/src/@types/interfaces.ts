export interface Playlist{
    cover:string;
    createDt:Date;
    id:number;
    title:string;
    userId:number;
    username:string;
}
export interface Music{
    author:string;
    id:number;
    musicCover:string;
    musicId:number;
    position:number;
    title:string;
}
export interface UniquePlaylist extends Playlist{
    playlistMusics:Music[]
}

export interface UniqueUser{
    playlists:UniquePlaylist[]
}