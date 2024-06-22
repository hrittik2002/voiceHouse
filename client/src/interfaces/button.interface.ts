import { ReactNode } from "react";

export interface ButtonInterface{
    onClick : (...args : any[]) => void;
    children: ReactNode;
}