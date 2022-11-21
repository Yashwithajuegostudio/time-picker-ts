import React from 'react'
import { ButtonStyle } from './Button.style'

interface ButtonProps {
    title?:string;
    clickHandler():void;
}

export const Button:React.FC<ButtonProps> = ({title,clickHandler}) => (
    <>
    <ButtonStyle onClick={clickHandler} >{title}</ButtonStyle>
    </>
)
