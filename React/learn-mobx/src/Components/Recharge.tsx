import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const Recharge = ({ rechargeStore }: any) => {
    const [phone, setPhone] = useState('')
    const [provider, setProvider] = useState('')
    const [disabled, setDisabled] = useState(true)

    interface RechargeResponse {
        amount: number
        area_codes: number[]
        expires_in: number
        fixed_amount: boolean
        incremental_rate: number
        kind: string
        maximum_amount: number
        minimum_amount: number
        name: string
        product_id: string
        provider: string
    }

    return (
        <div style={{
            marginBottom: '10px',
            outline: '2px solid red'
        }}>
            <div>
                <div>
                    <>
                        <p>{rechargeStore.ddd && rechargeStore.ddd} - {rechargeStore.phone && rechargeStore.phone}</p>
                        <p>{rechargeStore.provider && rechargeStore.provider}</p>
                    </>
                </div>
            </div>
            <div>
                <input type='number' placeholder='type your phone number with ddd' onChange={(ev) => { setPhone(ev.target.value) }} />
                <input type='text' placeholder='type your providername' onChange={(ev) => { setProvider(ev.target.value) }} />
                <button
                    onClick={() => {
                        if (rechargeStore.handleSplitPhoneNumber(phone) === 'invalid' || rechargeStore.handleSetProviderName(provider) === 'invalid') {
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
                    Listar Opções de Recarga
                </button>
            </div>
            <div>
                {rechargeStore.partnerResponse && rechargeStore.partnerResponse.map((item: RechargeResponse) => (
                    <div key={item.product_id} style={{display: 'flex', maxHeight: 40}}>
                        <p>{item.product_id} - {item.name} - {item.amount} - {item.minimum_amount} - {item.maximum_amount}</p>
                        <button
                            onClick={() => {rechargeStore.handleConfirmRechargeValue(item.amount, item.product_id)}}
                        >Escolher esse</button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default inject('rechargeStore')(observer(Recharge));
