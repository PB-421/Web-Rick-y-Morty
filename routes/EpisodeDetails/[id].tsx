import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CardEpisodes from "../../components/CardEpisodes.tsx";
import { Episode } from "../index.tsx";
import {Character} from "../index.tsx"

type Data = {
    episodio: Episode
}

async function getEpisode(id: string):Promise<Episode> {
    const char:Character[] = []
    const data = await fetch("https://rickandmortyapi.com/api/episode/"+id)
    if(data.status!==200) throw new Error("Fallo en la API Ep")
    const response = await data.json()
    for(let i = 0;i<response.characters.length;i++){
        const dataCh = await fetch(response.characters[i])
        if(dataCh.status!==200) throw new Error("Fallo en la API Char")
        const responseCh = await dataCh.json()
        char.push({
            id: responseCh.id,
            name: responseCh.name,
            image: responseCh.image
        })
    }
    return ({
        id: response.id,
        name: response.name,
        air_date: response.air_date,
        episode: response.episode,
        characters: char
    })
}

export const handler:Handlers = {
    GET: async (_req: Request,ctx: FreshContext<unknown,Data>) => {
        const {id} = ctx.params
        const episodio = await getEpisode(id)
        return ctx.render({episodio})
    }
}

export default function Page(props: PageProps) {
    const {episodio} = props.data
    return (
    <CardEpisodes episodio={episodio} />
    )
}
  