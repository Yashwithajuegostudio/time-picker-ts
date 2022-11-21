import React from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
    title?:string;
    onClickHandler?:() => void;
    active?:boolean; 
}

export const Button:React.FC<ButtonProps> = ({title,onClickHandler,active}) => (
    <>
    <ButtonStyle onClick={onClickHandler} active={active}>{title}</ButtonStyle>
    </>
)
