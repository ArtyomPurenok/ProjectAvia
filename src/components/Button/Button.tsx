type ButtonProps = {
    className?: string;
    onClick?: any;
    text?: string;
}

export const Button = ({className, onClick, text}: ButtonProps) => {
    return <button className={className} onClick={onClick}>
        {text}
    </button>;
};