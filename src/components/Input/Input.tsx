type InputProps = {
    className?: string
    onChange?: any
    onClick?: any
    placeholder?: string
    type?: string
    value?: any
    defaultValue?: any
    refInput?: any
    name?: string
};

export const Input = ({ className, onChange, onClick, placeholder, type, value, defaultValue, refInput, name }: InputProps) => {
    return <input
        ref={refInput}
        className={className}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        type={type}
        name={name}>
    </input>;
};