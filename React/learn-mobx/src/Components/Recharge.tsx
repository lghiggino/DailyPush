import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const Recharge = ({ rechargeStore }: any) => {
    const [poke, setPoke] = useState('')
    const [phone, setPhone] = useState('')
    const [provider, setProvider] = useState('')
    const [disabled, setDisabled] = useState(true)

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
            </div>
            <div>
                <input type='number' placeholder='type your phone number with ddd' onChange={(ev) => { setPhone(ev.target.value) }} />
                <input type='text' placeholder='type your providername' onChange={(ev) => { setProvider(ev.target.value) }} />

                <button
                    onClick={() => {
                        if (rechargeStore.handleGetSplitPhoneNumber(phone) === 'invalid' || rechargeStore.handleSetProviderName(provider) === 'invalid') {
                            setDisabled(true)
                        } else {
                            setDisabled(false)
                        }

                    }}>
                    Enviar
                </button>
                <button
                    onClick={rechargeStore.handleApiCallGetProductByProviderNameAndAreaCode}
                    disabled={disabled}
                >
                    check console to see providerList
                </button>
            </div>

        </div>
    );
}

export default inject('rechargeStore')(observer(Recharge));
