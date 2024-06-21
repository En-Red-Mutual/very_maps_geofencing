import { Meta } from "@storybook/react";
import { ToDo } from "./ToDo";

const meta = {
    title: "Components/ToDo",
    component:ToDo,
    args:{
        id:"1",
        todo:"Hola Mundo"
    },
}satisfies Meta<typeof ToDo>;

export default meta;

export const Default = {};

export const Story2 = {
    args:{
        id:"2",
        todo:"Hola Mundo 2"
    }
}

export const Completed = {
    args:{
        id:"3",
        todo:"Hola Mundo 3",
        isCompleted:true
    }
}