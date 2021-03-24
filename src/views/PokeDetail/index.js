import { useContext, useEffect } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import PokemonContext from "../../context/pokemons";
import PokeAbilities from "./PokeAbilities";


export default function PokeDetail(){

    const {id} = useParams();
    const {getPokemonDetail, pokemonDetail, isLoading, errorMessage, isError } =useContext(PokemonContext);
     /**Este id se utilizara para obtener los detalles del 
      * pokemon haciendo un request a la api
      */
     useEffect(()=>{
         getPokemonDetail({id}).catch(null);
     }
     ,[])

     

     if(isLoading) return (<Loading title="Cargando Pokemon" />);
     try{
        console.log(pokemonDetail);
        const abilities = pokemonDetail.abilities;
        console.log(abilities)
        return(
            <div>
                {isError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h2>{`Name: ${pokemonDetail?.name}`}</h2>
                    <img src={pokemonDetail?.sprites.front_default}/>
                    <div>
                        <h3>Abilities</h3>
                        <PokeAbilities abilities={abilities} />
                    </div>
                    <button><Link to={"/"}>Back</Link></button>
                </>
                ) }

                
            </div>
        )
     }
     catch{
         return(<div>Error</div>);
     }
}