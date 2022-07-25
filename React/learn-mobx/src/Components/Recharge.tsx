import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const Recharge = ({ rechargeStore }: any) => {
    const [poke, setPoke] = useState('')
    const [phone, setPhone] = useState('')

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
                <input type='number' placeholder='type your phone number with ddd' onChange={(ev) => { setPhone(ev.target.value) }} />
                <button
                    onClick={() => { rechargeStore.handleGetSplitPhoneNumber(phone) }}>
                    Enviar
                </button>
                
            </div>

        </div>
    );
}

export default inject('rechargeStore')(observer(Recharge));
