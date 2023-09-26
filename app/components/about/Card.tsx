"use client"

interface CardProps {
    icon: any,
    title: string,
    description: string
}

const Card: React.FC<CardProps> = ({icon, title, description}) => {
  return (
    <div className="
        h-[300px]
        md:h-[350px]
        bg-[#1a1a1a]
        border-[1px]
        border-gray-400
        border-opacity-10
        box-border
        p-[1rem]
        flex
        items-end
    ">
        <div className="
            w-full
            h-full
            sm:h-[220px]
            flex
            flex-col
            justify-between
            md:pb-[30px]
        ">
            {icon}
            <p className="gradient text-xl">
                {title}
            </p>
            <p className="font-light text-sm">
                {description}
            </p>
        </div>
    </div>
  )
}

export default Card