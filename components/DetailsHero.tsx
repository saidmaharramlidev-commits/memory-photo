import Image from "next/image"
import Pic from "@/public/detailsHeroPic.jpg"

interface Props {
    header: string,
    url: string
}


function DetailsHero({ header, url }: Props) {
    return (
        <div id="mainDetailsHero">
            <Image alt="Picture" src={Pic} id="PicOfDetailsHero" />
            <h1>{header}</h1>
            <h4>{url}</h4>

        </div>
    )
}

export default DetailsHero