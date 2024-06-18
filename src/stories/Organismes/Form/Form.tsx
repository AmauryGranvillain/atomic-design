import "./form.css";
import {InputField} from "../../Molecules/InputField/InputField.tsx";
import {ButtonSearch} from "../../Atomes/ButtonSearch/ButtonSearch.tsx";

export const Form = () => {
    return (
        <div className="form">
            <InputField label="Enter the site..." name="input-enter-site" id="enter-site" />
            <ButtonSearch label="Search" size="large"/>
        </div>
    )
}