import { type } from "os"

type ButtonListProps = {
    children: React.ReactNode
}

const ButtonList = ({children}: ButtonListProps) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

export default ButtonList