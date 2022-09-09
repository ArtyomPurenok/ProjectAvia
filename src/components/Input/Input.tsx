type InputProps = {
    className?: string;
    onChange?: any;
    placeholder?: string;
    type?: string
};

export const Input = ({className, onChange, placeholder, type}: InputProps) => {
    return <input className={className} onChange={onChange} placeholder={placeholder} type={type}>

    </input>;
};