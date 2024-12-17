import "./styles.css";
import React from "react";

export default function App() {
  const [pokemon, setPokemon] = React.useState();
  const [pokemonWithAbilites, setPokemonAblities] = React.useState();

  const getAbilitesOfPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log("abilities", data?.abilities);
    return data?.abilities;
  };

  const getAllPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const res = await fetch(url);
    const data = await res.json();
    setPokemon(data?.results);

    console.log("data", data?.results);
  };

  React.useEffect(() => {
    getAllPokemon();
  }, []);

  // const TempFunction = async () => {

  // };

  const Fetch = async () => {
    const data = await Promise.all(
      pokemon?.map(async (d) => {
        console.log("dddd", d);
        return {
          name: d?.name,
          abilities: await getAbilitesOfPokemon(d?.url),
        };
      })
    );
    console.log("333333", data);
    setPokemonAblities(data);
  };

  React.useEffect(() => {
    console.log("pokemon", pokemon);
    if (pokemon?.length > 0) {
      Fetch();
    }
  }, [pokemon]);

  return (
    <div>
      <h1 className="title">Hi Pokemon!</h1>
      {pokemonWithAbilites &&
        pokemonWithAbilites?.map((pokemon) => (
          <div>
            <div>Name : - {pokemon?.name}</div>
            <div>
              Abilites :
              {pokemon?.abilities &&
                pokemon?.abilities?.map((ability) => (
                  <span>{ability?.ability?.name} </span>
                ))}
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
}
