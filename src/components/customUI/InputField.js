export default function InputField({className, element,onBlur, select, value, onChange, label, placeholder, id, name, error}) {

    return (
        <div className={`inputField ${className}`}>
            <label>
                <p className="helper">{label}</p>
                {element || <input
                    value={value}
                    onChange={onChange}
                    id={id}
                    onBlur={onBlur}
                    name={name}
                    placeholder={placeholder}
                />}
                {select && <div className="indicator"><span className="icon-keyboard_arrow_down"></span></div>}
                <p className="err-message">{error}</p>
            </label>
        </div>
    )
}