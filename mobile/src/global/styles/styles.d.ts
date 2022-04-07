import 'styled-components/native';

declare module 'styled-components/native'{
    export interface DefaultTheme{
        title:string;
        colors:{
            primary:string;
            title:string;
            music_title:string;
            info:string;
            card:string;
            bar:string;
            button:string;
            icon:string;
            playlist_title:string;
        }
    }
}