type InputProps = {
    className?: string,
    onChange?: any,
    placeholder?: string,
    type?: string,
    value?: any,
    name?: string

};

export const Input = ({ className, onChange, value, placeholder, name, type }: InputProps) => {
    return <input className={className} onChange={onChange} name={name} value={value} placeholder={placeholder} type={type}>

    </input>;
};