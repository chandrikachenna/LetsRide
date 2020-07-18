import { InputFieldElement } from "./InputFieldElement"
import React from 'react'
import '../../../styles/tailwind.css'
import { withKnobs,text } from "@storybook/addon-knobs"
import { ValidateFullname } from "../../utils/ValidateFullname"
import { action } from "@storybook/addon-actions"
export default {
    component: InputFieldElement,
    title: 'CommanInputField/InputField'
 }
export const InputDefaultView = () => (
    <InputFieldElement
        onChange={action("change fullname")}
        placeHolder={"FullName"}
        validateForm={ValidateFullname}

    />
 )
 export const knobs = () => (
    <InputFieldElement
    onChange={action("onChange")}
    placeHolder={text("PlaceHolder","FullName")}
    validateForm={ValidateFullname}
    />
 )
knobs.story = {
    decorators: [withKnobs]
 }
 