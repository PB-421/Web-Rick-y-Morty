import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CardDetails from "../../components/CardDetails.tsx";
import { Character, Episode } from "../index.tsx";


type Data = {
    personaje: Character
}

async function getPersonaje(id: string):Promise<Character> {
    const episodes:Episode[] = []
    const data = await fetch("https://rickandmortyapi.com/api/character/"+id)
    if(data.status!==200) throw new Error("Fallo en la API Char")
    const response = await data.json()
    for(let i = 0;i<response.episode.length;i++){
        const dataEp = await fetch(response.episode[i])
        if(dataEp.status!==200) throw new Error("Fallo en la API Ep")
        const responseEp = await dataEp.json()
        episodes.push({
            id: responseEp.id,
            name: responseEp.name
        })
    }
    return ({
        id: response.id,
        name: response.name,
        status: response.status,
        gender: response.gender,
        image: response.image,
        episode: episodes
    })
}
  
export const  handler:Handlers = {
    GET: async (_req: Request,ctx:FreshContext<unknown,Data>) => {
        const {id} = ctx.params
        const personaje = await getPersonaje(id)
        return ctx.render({personaje})
    }
}

export default function Page(props: PageProps) {
    const {personaje} = props.data
    return (
        <CardDetails personaje={personaje} />
    )
}