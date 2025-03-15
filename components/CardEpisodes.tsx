import { Episode } from "../routes/index.tsx"
import DisplayIndex from "./DisplayIndex.tsx"

type Props = {
    episodio: Episode
}

export default function CardEpisodes({episodio}:Props) {
    return(
        <div class="displayDetails">
            <div class="titleDetails">
            <h2>{episodio.episode}: {episodio.name}</h2>
            </div>
            <div class="titleDetails">
            <h2>Fecha de emision: {episodio.air_date}</h2>
            </div>
            <div class="titleDetails">
            <h2>Lista de personajes de este episodio:</h2>
            </div>
            <div class="displayIndex">
               <DisplayIndex  personajes={episodio.characters!}/>
            </div>
        </div>
    )
}