type ButtonProps = {
    className?: string;
    onClick?: any;
    text?: any;
    Icon?: any
}

export const Button = ({ className, onClick, text, Icon }: ButtonProps) => {
    return <button className={className} onClick={onClick}>
        {text}
        {Icon && <Icon />}
    </button>;
};