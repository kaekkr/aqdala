import Image from "next/image";

interface IAboutUsCard {
    title: string;
    description: string;
    img: string
}

const AboutUsCard = ({title, description, img}: IAboutUsCard) => {
    return <div className="bg-white rounded-3xl p-5 flex space-x-5">
        <Image src={img} alt={img} width={8} height={154}/>
        <div className='flex flex-col justify-between'>
            <p className='p2-m-medium'>{title}</p>
            <p className='p2-m text-neutral-dark'>{description}</p>
        </div>
    </div>
}

export default AboutUsCard;