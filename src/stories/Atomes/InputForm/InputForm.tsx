import "./inputForm.css";

interface InputFormProps {
    label?: string;
    name: string;
    id: string;
    onChange: (text: string) => void
}

export const InputForm = ({
    label,
    name,
    id,
    onChange,
    ...props
}: InputFormProps) => {
    return (
        <input
            id={id}
            className="input-form"
            type="text"
            value={label}
            name={name}
            placeholder={"Enter the text ..."}
            onChange={(e) => onChange(e.target.value)}
            {...props} />
    )
}