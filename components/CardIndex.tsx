type Props = {
    id: number
    name: string,
    image: string
}

export default function CardIndex({id,name, image}:Props) {
    return (
        <>
        <div class="cardIndex">
        <a href={"../CharacterDetails/"+id}><img class="circular" src={image}/></a>
        <h4 style={{maxWidth:"200px"}}> {name}</h4>
        </div>
        </>
    )
}