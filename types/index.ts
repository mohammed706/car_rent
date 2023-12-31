import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    textStyles?:string;
    btnType?: "button" | "submit";
    rightIcon?:string;
    isDisabled?:boolean;
    handleClick?:MouseEventHandler<HTMLButtonElement>
}

export interface SearchManuFactureProps{
    manuFacture:string;
    setManuFature:(manuFacture:string)=>void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDetailsProps{
    isOpen:boolean;
    closeModal: ()=>void;
    car: CarProps
}

export interface filterProps{
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string
}
export interface OptionProps{
    title:string,
    value:string
}
export interface CustomFilterProps{
    title:string,
    options: OptionProps[]
}