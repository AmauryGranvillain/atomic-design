import './labelForm.css';

interface LabelFormProps {
    label: string;
}

export const LabelForm = ({ label }: LabelFormProps) => {
    return (
        <label className="label-form">
            {label}
        </label>
    )
}