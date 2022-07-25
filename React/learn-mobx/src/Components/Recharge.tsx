import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const Recharge = ({ rechargeStore }: any) => {
    const [poke, setPoke] = useState('')

    return (
        <div style={{
            marginBottom: '10px',
            outline: '2px solid red'
        }}>
            <div>
                <div>
                    {rechargeStore.pikachu && JSON.stringify(rechargeStore.pikachu, null, 4)}
                </div>
                <button
                    onClick={rechargeStore.handleGetPikachu}>
                    Get Pikachu
                </button>
            </div>
            <div>
                <div>
                    {rechargeStore.anypokemon && JSON.stringify(rechargeStore.anypokemon, null, 4)}
                    {console.log("rechargeStore.anypokemon", rechargeStore.anypokemon)}
                </div>
                <input type='text' placeholder='type a pokemon name' onChange={(ev) => { setPoke(ev.target.value) }} />
                <button
                    onClick={() => { rechargeStore.handleGetPokemon(poke) }}>
                    {`Get ${poke} data`}
                </button>
            </div>

        </div>
    );
}

export default inject('rechargeStore')(observer(Recharge));
