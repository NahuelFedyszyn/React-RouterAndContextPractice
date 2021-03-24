export default function PokeAbilities({abilities}){
    console.log(abilities)
    return(
        <div>
            <div>{abilities.map((element,index) =>(
                (   
            <div key={index}>
                <p>{element.ability.name}</p>
                <img url={element.ability.url}/>
            </div>)
            )
        )}</div>
        </div>
    )
}