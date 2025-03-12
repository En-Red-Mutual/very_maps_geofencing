
export type ColorPickerProps = {
    valueColor: string;
    colors? : { name: string, color: string }[];
    onChangeColor: (color: string) => void;
}
