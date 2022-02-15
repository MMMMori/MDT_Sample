import Image from 'next/image';

type PictCardProps = {
    info: {
        imgid: string;
        name: string;
        date: string;
        tag: string;
        message: string;
    }
}
export const PictCard = (props: PictCardProps ) => {
    return (
        <div className="">
            <div className="">
                <Image src={props.info.imgid} />
            </div>
            <div className="text-stone-800">
                <div className="flex space-x-4 pt-2">
                    <div>{props.info.date}</div>
                    <div>{props.info.name}</div>
                    <div><Image src='/image/btn_heart.png' alt='title' width={20} height={20} /></div>
                    <div><Image src='/image/btn_rose.png' alt='title' width={20} height={20} /></div>
                    <div><Image src='/image/btn_present.png' alt='title' width={20} height={20} /></div>
                    <div><Image src='/image/btn_diamond.png' alt='title' width={20} height={20} /></div>
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