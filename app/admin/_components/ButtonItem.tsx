import { cn } from "@/utils/utils"
import { ChevronRight, Loader2 } from "lucide-react"
import { ButtonHTMLAttributes, ForwardRefExoticComponent, LegacyRef, ReactNode, forwardRef } from "react"

type ButtonItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: ReactNode,
    valueAsDescription?: boolean,
    isLoading?: boolean,
}

const ButtonItem: ForwardRefExoticComponent<ButtonItemProps> = forwardRef(({onClick: handleClick, disabled=false, isLoading=false, value, valueAsDescription=false, children, className, ...props}, ref:LegacyRef<HTMLButtonElement> | undefined) => {
    return (
        <button
            ref={ref}
            {...props}
            type="button"
            disabled={disabled || isLoading}
            onClick={handleClick}
            className={
                cn(className,
                    "flex justify-between items-center text-sm first:rounded-t-md last:rounded-b-md border py-4 px-4 border-slate-300 [&:not(:first-child)]:-mt-[1px]", 
                    {'hover:bg-secondary hover:cursor-pointer': handleClick}
                    )
                }
            >
            {children}
            {valueAsDescription && value && <span className="text-slate-500 font-normal">{value}</span>}
            {
                isLoading ?
                <Loader2 size={16}  className="h-4 w-4 animate-spin text-slate-500"/>
                :
                <span className="flex items-center gap-2">
                    {!valueAsDescription && value ? <span className="text-slate-500 font-normal">{value}</span> : null}
                    {handleClick ? <ChevronRight size={16} /> : null}
                </span>
            }
        </button>
    )
})

export default ButtonItem