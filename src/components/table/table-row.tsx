import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"


interface TableRowProps extends ComponentProps<"tr">{}

export function TableRow({ className ,...rest}: TableRowProps){
    return(
        <tr className={twMerge("border-b border-white/10 hover:bg-white/5", className)} {...rest}/>
    )
}