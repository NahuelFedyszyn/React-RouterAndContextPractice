import {useContext, useEffect} from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons/index";
import PokemonList from "./components/PokemonList";


export default function Home(){

    const {getPokemons,pokemons,isLoading,isError,errorMessage} = useContext(PokemonContext);
    
    useEffect(()=>getPokemons().catch(null),[]);

    console.log(pokemons)
    if (isLoading) return <Loading title="Cargando resultados"/>
    return(
        
        <div>
            {isError ? <ErrorMessage message={errorMessage} /> : <PokemonList pokemons={pokemons} />}
        </div>
    )
}