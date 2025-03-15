import DisplayIndex from "../components/DisplayIndex.tsx"
export type Character = {
  id: number
  name: string
  status?: string
  gender?: string
  image: string
  episode?: Episode[]
}

export type Episode = {
    id: number,
    name: string,
    air_date?: string,
    episode?: string,
    characters?: Character[]
}


async function getPersonajes(page: number):Promise<Character[]> {
  const char:Character[] = []
  const data = await fetch("https://rickandmortyapi.com/api/character/?page="+page)

  if(data.status!==200) throw new Error("Fallo en la API Char")
  const response = await data.json()
  for(let i = 0;i<response.results.length;i++){
  char.push({
      id: response.results[i].id,
      name: response.results[i].name,
      image: response.results[i].image
  })
  }
  return char
}

export default async function Home(req: Request) {
  const url = new URL(req.url)
  const page = Number(url.searchParams.get("page")) || 1
  const personajes = await getPersonajes(page)
  return (
    <div>
      <div class="titleIndex">
            <h2>Personajes de Rick y Morty</h2>
      </div>
      <DisplayIndex personajes={personajes} ></DisplayIndex>
      <br/>
      <br/>
      <div class="buttonRow">
        <a href={"/?page="+(page-5)}><button disabled={page <= 5} type="button" class="circularB" title="Vuelve atras 5 paginas">-5</button></a>
        <a href={"/?page="+(page-1)}><button disabled={page <= 1} type="button" class="circularB" title="Vuelve a la pagina anterior">Anterior</button></a>
        <h3 style={{justifyContent: "center",paddingTop: "8px"}}>Pagina {page}</h3>
        <a href={"/?page="+(page+1)}><button disabled={page >= 42} type="button" class="circularB" title="Ve a la siguiente pagina">Siguiente</button></a>
        <a href={"/?page="+(page+5)}><button disabled={page >= 37} type="button" class="circularB" title="Avanza 5 paginas">+5</button></a>
      </div>
      <br/>
      <br/>
    </div>
  );
}