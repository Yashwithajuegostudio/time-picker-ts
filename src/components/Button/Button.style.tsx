import styled from "styled-components";
import { COLOR } from "../utils/constant";
import { ButtonProps } from "./Button";


export const ButtonStyle = styled.button<ButtonProps>`
  padding: 1.2rem;
  width: 4rem;
  cursor: pointer;
  color: ${(props) => (props.active ? COLOR.primaryRed : COLOR.primaryGrey)};
  border-radius: 0.5rem;

`;
