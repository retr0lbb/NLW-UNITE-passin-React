import React, {ComponentProps} from "react";
import { twMerge } from "tailwind-merge";


interface CardProps extends ComponentProps<"div">{
    title: string
    description?: string
    children: React.ReactElement
}

export const Card: React.FC<CardProps> = ({children, title, description, className, ...rest}) => {
    return(
        <div className={
            twMerge("min-w-52 flex flex-col p-5 rounded-xl max-w-full min-h-52 max-h-full border border-black/10 bg-zinc-800", 
            className)} {...rest}>
            <div className="">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-zinc-300 text-xs">{description}</p>
            </div>
            
            <div className="flex flex-1 items-center justify-center mt-3">
                {children}
            </div>
        </div>
    )
}