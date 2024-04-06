import { ComponentProps, ReactNode } from "react"

interface Props extends ComponentProps<"a">{
    children?: ReactNode
    isSelected?: boolean
}

export function NavLink({ isSelected = false, children, ...rest }:Props){
    return <a className={`font-medium text-sm ${isSelected? "" : "text-zinc-300"}`} {...rest}> {children} </a>
}