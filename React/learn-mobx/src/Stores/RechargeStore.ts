import axios from "axios";
import { action, makeObservable, observable } from "mobx"

export class RechargeStore {
    ddd: string | undefined = undefined
    phone: string | undefined = undefined
    provider: string | undefined = undefined
    partnerResponse: any[] | undefined = undefined
    rechargeValue: string | undefined = undefined
    rechargeFormattedValue: string = ''
    partnerProductId: string | undefined = undefined
    rechargeRequestId: string | undefined = undefined

    constructor() {
        makeObservable(this, {
            ddd: observable,
            phone: observable,
            provider: observable,
            partnerResponse: observable,
            rechargeValue: observable,
            rechargeFormattedValue: observable,
            partnerProductId: observable,
            rechargeRequestId:observable,
            handleSplitPhoneNumber: action,
            handleSetProviderName: action,
        });
    }

    // 01
    handleSplitPhoneNumber = (phoneNumber: string) => {
        if (phoneNumber.length !== 11) {
            return ('invalid')
        }
        else {
            this.ddd = phoneNumber.slice(0, 2)
            this.phone = phoneNumber.slice(2)
            alert(`${this.ddd} + ${this.phone}`)
        }
    }

    // 02
    handleSetProviderName = (providerName: string) => {
        const providers = ['Vivo', 'Tim', 'Oi', 'Claro']
        if (!providers.includes(providerName)) {
            return ('invalid')
        }
        this.provider = providerName
        alert(this.provider)
    }

    // 03
    handleApiCallGetProductByProviderNameAndAreaCode = async () => {
        const ddd = this.ddd
        const provider = this.provider
        try {
            const { data } = await axios.get(`http://localhost:3333/rv/portfolio?providerName=${provider}&areaCode=${ddd}`)
            this.partnerResponse = data
        } catch (error) {
            console.log(error)
        }
    }

    // 04
    handleConfirmRechargeValue = (value: string, productId: string) => {
        this.rechargeValue = value
        this.partnerProductId = productId
        alert(`${this.rechargeValue} ${this.partnerProductId}`)
        this.handleVoltzCallRequestBlockFund(this.rechargeValue)
        this.handleApiCallRequestRecharge()
    }

    //05
    handleVoltzCallRequestBlockFund = async (value: string) => {
        const formattedValue = value.slice(0,-2)
        this.rechargeFormattedValue = formattedValue
        console.log('entrou aqui no handleVoltzCallRequestBlockFund')
        //precisa chamar na voltz e validar se está tudo OK
        await this.handleApiCallRequestRecharge()
    }

    //06
    handleApiCallRequestRecharge = async () => {
        const productId = this.partnerProductId
        const areaCode = this.ddd
        const phoneNumber = this.phone
        const formattedValue = this.rechargeFormattedValue

        const { data } = await axios.post(`http://localhost:3333/rv/recharge/request?productId=${productId}&areaCode=${areaCode}&phoneNumber=${phoneNumber}`)
        console.log(data)
        //chama na Voltz a transferencia do valor
        this.handleVoltzCallRequestCreditTransfer(formattedValue)
    }

    //07
    handleVoltzCallRequestCreditTransfer = async (value: string) => {
        setTimeout(() => {
            alert(`confirma a transferência de R$${value} entre user e voltz`)
        }, 1200)

        //chama na rv a confirmação da recarga
    }

    //08
    handleApiCallConfirmRecharge = async () => {}

    //09 
    handleVoltzCallRequestBankStatement = async () => {}





    // handleGetProviderName = (providerName: string) => {
    //     //precisa checar a validade do providerName se ele vem de um front controlado?
    //     this.provider = providerName
    //     if ((this.ddd !== undefined) && (this.provider !== undefined)) {
    //         this.handleGetProviderOptionsList(this.ddd, this.provider)
    //     }
    // }

    // handleGetProviderOptionsList = async (ddd: string, provider: string) => {
    //     try {
    //         //posta pra senha
    //         //get dos planos e seta this.partnerResponse
    //         // const {data} = await axios.get()
    //     } catch (error) {
    //         alert(error)
    //     }
    // }



}