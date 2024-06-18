import {useState} from "react";
import './inputField.css';
import {LabelForm} from "../../Atomes/LabelForm/LabelForm.tsx";
import {InputForm} from "../../Atomes/InputForm/InputForm.tsx";

interface InputFieldProps {
    label: string;
    name: string;
    id: string;
}

export const InputField = ({ label, name, id }: InputFieldProps) => {

    const [textInput, setTextInput] = useState("");

    function onChangeTextInput(text: string) {
        setTextInput(text)
    }

    return (
        <div className="input-field">
            <LabelForm label={label} />
            <InputForm name={name} id={id} label={textInput} onChange={onChangeTextInput}/>
        </div>
    )
}