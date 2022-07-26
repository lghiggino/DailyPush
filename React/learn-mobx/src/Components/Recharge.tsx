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
                    <>
                        <p>{rechargeStore.ddd && rechargeStore.ddd}</p>
                        <p>{rechargeStore.phone && rechargeStore.phone}</p>
                        <p>{rechargeStore.provider && rechargeStore.provider}</p>
                    </>
                </div>
                <button
                    onClick={rechargeStore.handleApiCallLogin}>
                    check console
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
