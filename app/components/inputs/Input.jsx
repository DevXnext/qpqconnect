'use client';

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  formatPrice,
  required,
  errors,
  inputStyle,
  className
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
        peer
        w-full
        p-3
        pt-7
        font-light 
        bg-white 
        border-2
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        ` + className}
        style={{ ...inputStyle, fontSize: "14px" }}
      />
      <label
        className={`
        absolute 
        text-md
        duration-150 
        transform 
        -translate-y-4
        top-4
        z-10 
        origin-[0]
        ${formatPrice ? 'left-9' : 'left-2'}
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0.5
        peer-focus:scale-76
        peer-focus:-translate-y-4
        ml-2
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
        style={{ fontSize: "10px" }}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;