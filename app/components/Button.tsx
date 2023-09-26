"use client"

type ButtonProps = {
    text: string,
    icon: any;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({text, icon, onClick}) => {
  return (
    <button className="
        w-[200px]
        h-[60px]
        bg-[#1a1a1a]
        border-[1px]
      border-gray-400
        border-opacity-10
        font-light
        text-sm
        rounded
        box-border
        p-[1rem]

        flex
        justify-center
        items-center
        gap-[1rem]
        transition
        buttonTranslate
    " onClick={onClick}>
        {text}
        {icon}
    </button>
  )
}

export default Button