import { Meta } from "@storybook/react";
import InputSearch from "./InputSeach";

const meta = {
    title : "Components/InputSearch",
    component: InputSearch,
    args: {}
} as Meta <typeof InputSearch>;

export default meta;

export const Default ={
    args:{
        value:'Agua marina 44'
    }
}