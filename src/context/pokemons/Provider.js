import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({children}){
    const [pokemons,setPokemons] = useState([]);
    const [pokemonDetail,setPokemonDetail] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("Something went wrong... Check your connection")
    const getPokemons = async () =>{
        try{
            setIsLoading(true);
            setIsError(false);
            const pokemonsResult = await apiCall({url:"https://pokeapi.co/api/v2/pokemon?limit=500"})
            setPokemons(pokemonsResult.results);
        }
        catch(err){
            console.log("ERROR");
            setPokemons([]);
            setIsError(true);
        }
        finally{
            setIsLoading(false)
        }
    }
    
    const getPokemonDetail = async ({id}) =>{
        if(!id) Promise.reject("ID Required");
        try{
            setIsLoading(true);
            setIsError(false);

            //throw new Error("Hey!");

            const pokemonDetail = await apiCall({url:`https://pokeapi.co/api/v2/pokemon/${id}`})
            setPokemonDetail(pokemonDetail);
        }
        catch(error){
            setPokemonDetail({});
            setIsError(true);
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <PokemonContext.Provider value={{
            
            showAlert: () => alert("This is an alert"),
            getPokemons,
            pokemons,
            getPokemonDetail,
            pokemonDetail,
            isLoading,
            setIsLoading,
            isError,
            setIsError,
            errorMessage,
            setErrorMessage
            }}>
            {children}
        </PokemonContext.Provider>
    );
}