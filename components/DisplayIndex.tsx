import CardIndex  from "./CardIndex.tsx"

type Character = {
    id: number;
    image: string;
    name: string;
  };

type Props = {
    personajes: Character[]
}

export default function DisplayIndex({personajes}:Props) {
    return (
        <div className="displayIndex">
            {personajes.map((elem) => (
                <CardIndex key={elem.id} id={elem.id}name={elem.name} image={elem.image} />
            ))}
        </div>
    )
}