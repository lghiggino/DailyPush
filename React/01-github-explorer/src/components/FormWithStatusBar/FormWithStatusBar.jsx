import { useState, useEffect } from "react";
import "./FormWithStatusBar.scss";
import { StatusBar } from "./StatusBar";

export function FormWithStatusBar() {
    const [formData, setFormData] = useState({
        type: "",
        name: "",
        state: "",
        email: ""
    })

    const [progress, setProgress] = useState(0)

    const [objectProgress, setObjectProgress] = useState({
        type: "unchecked",
        name: "unchecked",
        state: "unchecked",
        email: "unchecked"
    })

    function handleValidationAndProgress() {
        if (formData.type) {
            setObjectProgress(data => ({ ...data, type: "checked" }))
        }
        if (formData.name.length) {
            setObjectProgress(data => ({ ...data, name: "checked" }))
        }
        if (formData.state) {
            setObjectProgress(data => ({ ...data, state: "checked" }))
        }
        if (formData.email.length) {
            const email = formData.email
            const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email.match(validRegex)){
                setObjectProgress(data => ({ ...data, email: "checked" }))
            }
        }
    }


    function handleName(ev) {
        if (formData.name.length > 0 && objectProgress.name === "checked") {
            return
        } else {
            setFormData(data => ({ ...data, name: ev.target.value }))
            handleValidationAndProgress()
        }

    }

    function handleType(ev) {
        if (formData.type.length > 0 && objectProgress.type === "checked") {
            return
        } else {
            setFormData(data => ({ ...data, type: ev.target.value }))
            handleValidationAndProgress()
        }
    }

    function handleState(ev) {
        if (formData.state.length > 0 && objectProgress.state === "checked") {
            return
        } else {
            setFormData(data => ({ ...data, state: ev.target.value }))
            handleValidationAndProgress()
        }
    }

    function handleemail(ev) {
        if (formData.email.length > 0 && objectProgress.email === "checked") {
            return
        } else {
            setFormData(data => ({ ...data, email: ev.target.value }))
            handleValidationAndProgress()
        }
    }

    function handleProgressBarCompletion() {
        const checkCountArr = Object.entries(objectProgress).filter((item) => {
            return item[1] === 'checked'
        })
        setProgress(checkCountArr.length * 25)
    }

    useEffect(() => {
        handleValidationAndProgress()
    }, [formData])

    useEffect(() => {
        handleProgressBarCompletion()
    }, [objectProgress])

    return (
        <div className='wrapper'>
            <StatusBar progress={progress} />
            <div className="form-wrapper">
                <div className="form-input">
                    <label>name</label>
                    <input
                        name="name"
                        onChange={(ev) => { handleName(ev) }}
                    ></input>
                </div>
                <div className="form-input">
                    <label>value</label>
                    <select
                        name="type"
                        onChange={(ev) => { handleType(ev) }}
                        value={formData.type}
                    >
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                </div>
            </div>
            <div className="form-wrapper">
                <div className="form-input">
                    <label>state</label>
                    <select
                        name="state"
                        onChange={(ev) => { handleState(ev) }}
                    >
                        <option value="RJ">RJ</option>
                        <option value="SP" >SP</option>
                        <option value="MG">MG</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>email</label>
                    <input
                        htmlFor="email"
                        onChange={(ev) => { handleemail(ev) }}
                    ></input>
                </div>
            </div>
        </div>
    )
}