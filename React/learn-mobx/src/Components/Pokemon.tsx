import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const Pokemon = ({ pokemonStore }: any) => {
    const [poke, setPoke] = useState('')

    return (
        <div style={{
            marginBottom: '10px',
            outline: '2px solid red'
        }}>
            <div>
                <div>
                    {pokemonStore.pikachu && JSON.stringify(pokemonStore.pikachu, null, 4)}
                </div>
                <button
                    onClick={pokemonStore.handleGetPikachu}>
                    Get Pikachu
                </button>
            </div>
            <div>
                <div>
                    {pokemonStore.anypokemon && JSON.stringify(pokemonStore.anypokemon, null, 4)}
                    {console.log("pokemonStore.anypokemon", pokemonStore.anypokemon)}
                </div>
                <input type='text' placeholder='type a pokemon name' onChange={(ev) => { setPoke(ev.target.value) }} />
                <button
                    onClick={() => { pokemonStore.handleGetPokemon(poke) }}>
                    {`Get ${poke} data`}
                </button>
            </div>

        </div>
    );
}

export default inject('pokemonStore')(observer(Pokemon));
