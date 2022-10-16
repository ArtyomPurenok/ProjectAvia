type InputProps = {
    className?: string
    onChange?: any
    onClick?: any
    placeholder?: string
    type?: string
    defaultValue?: any
    refInput?: any
};

export const Input = ({className, onChange, onClick, placeholder, type, defaultValue, refInput}: InputProps) => {
    return <input ref={refInput} className={className} onChange={onChange} onClick={onClick} placeholder={placeholder} defaultValue={defaultValue} type={type}>

    </input>;
};