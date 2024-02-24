import Image from "next/image"

export const Concept = ({image, title, description}) => {
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <Image src={image} alt={title} width={125} height={125} className="object-cover"/>
            </div>
            <div className="text-center">
                <h6 className="text-white text-center">{title}</h6>
                <p className="text-sativa text-sm mt-2">{description}</p>
            </div>
        </div>
    )
}