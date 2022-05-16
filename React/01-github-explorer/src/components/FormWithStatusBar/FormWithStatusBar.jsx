import { useState } from "react";
import './FormWithStatusBar.scss';
import { StatusBar } from "./StatusBar";

export function FormWithStatusBar() {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        state: '',
        city: ''
    })

    const [progress, setProgress] = useState(0)

    function handleProgress() { 
        console.log("formData>>>", formData)
        if(formData.city.length){
            setProgress(p => p + 25)
        }
    }

    useState(() => {
        handleProgress()
    }, [formData])

    return (
        <>
            <StatusBar progress={progress} />
            <div className="form-wrapper">
                <div className="form-input">
                    <label>name</label>
                    <input
                        name="name"
                        onChange={(ev) => { setFormData(data => ({ ...data, name: ev.target.value })) }}
                    ></input>
                </div>
                <div className="form-input">
                    <label>value</label>
                    <select
                        name="type"
                        onChange={(ev) => { setFormData(data => ({ ...data, type: ev.target.value })) }}
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
                        onChange={(ev) => { setFormData(data => ({ ...data, state: ev.target.value })) }}
                    >
                        <option value="RJ">RJ</option>
                        <option value="SP" >SP</option>
                        <option value="MG">MG</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>city</label>
                    <input
                        htmlFor="city"
                        onChange={(ev) => { setFormData(data => ({ ...data, city: ev.target.value })) }}
                    ></input>
                </div>
            </div>

            {JSON.stringify(formData, null, 4)}
        </>
    )
}