import Image from 'next/image';

type PictCardProps = {
    info: {
        imgid: string;
        name: string;
        date: string;
        tag: string;
        message: string;
        heart: number;
        rose: number;
        present: number;
        diamond: number;
    }
}
export const PictCard = (props: PictCardProps ) => {
    return (
        <div className="">
            <div className="">
                <Image src={props.info.imgid} alt='title' width={900} height={600}/>
            </div>
            <div className="text-stone-800">
                <div className="flex space-x-4 pt-2">
                    <div>{props.info.date}</div>
                    <div>{props.info.name}</div>
                    <div><Image src='/image/btn_heart.png' alt='title' width={20} height={20} />{props.info.heart}</div>
                    <div><Image src='/image/btn_rose.png' alt='title' width={20} height={20} />{props.info.rose}</div>
                    <div><Image src='/image/btn_present.png' alt='title' width={20} height={20} />{props.info.present}</div>
                    <div><Image src='/image/btn_diamond.png' alt='title' width={20} height={20} />{props.info.diamond}</div>
                </div>
                <div>
                    {props.info.tag}
                </div>
                <div>
                    <span className="">{props.info.message}</span>
                </div>
            </div>
        </div>
    );
};