import { PageProps } from "$fresh/server.ts";

export default function layout(props: PageProps) {
    const Component = props.Component;

    return (
        <>
            <div class="layout">
               <a href="/"> <img class="circular" style={{paddingLeft: 20}} src="https://image.tmdb.org/t/p/original/g6z3xEHsJp2sKMRZn3or5ZuL0X3.svg" title="Home"/> </a>
               <h1 style={{color: "black", paddingRight:20}}>Rick y Morty Info</h1>
            </div>
            <Component />
            <div></div>
        </>
    );
}