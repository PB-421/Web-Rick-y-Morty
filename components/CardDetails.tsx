import { Character } from "../routes/index.tsx";

type Props = {
    personaje: Character
}

export default function CardDetails({personaje}:Props) {
    return(
        <div class="displayDetails">
            <div class="titleDetails">
            <h2>{personaje.name}</h2>
            </div>
            <div class="cardDetails">
                <img class="circular" src={personaje.image} title={personaje.name} width={200}></img>
                <div class="textDetails">
                <h4>Id: {personaje.id}</h4>
                <h4>Status: {personaje.status}</h4>
                <h4>Gender: {personaje.gender}</h4>
                </div>
            </div>
            <div class="titleDetails">
            <h3>Lista de episodios</h3>
            </div>
            <div class="displayEpisodesChDetails ">
                {personaje.episode!.map((elem,index) => <li key={index}><div class="cardEpisodesChDetails "><a style={{color: "rgb(200,200,0)", textDecoration: "none"}}href={"../EpisodeDetails/"+(elem.id)}>{elem.name}</a></div></li>)}
            </div>
        </div>
    )
}