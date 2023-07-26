type ButtonProps = {
    label: string,
    handleClick?: () => void,
}

export const Button = ({ label, handleClick }: ButtonProps) => {
    return (
        <button type="button" onClick={handleClick}>{label}</button>
    )
}