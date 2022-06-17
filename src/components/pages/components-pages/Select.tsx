interface SelectProps {
    setMedCategorie:any,
    className:string,
    text:string,
    name:string,
    options:any,
    handleOnChange:string,
    value:string,
}

const Select: React.FC<SelectProps> = ({setMedCategorie, className, text, name, options, handleOnChange,value}) => {

    return(
        <select onChange={e =>setMedCategorie(e.target.value)} name={name} id = {name}  className={className}>
            <option value = '0' key = '0'>Categoria do remédio.</option>
            {options.map((e:any) => (
                <option key={e.id} value={e.name} >{e.name}</option>
            ))}
        </select>
    )
    
}

export default Select