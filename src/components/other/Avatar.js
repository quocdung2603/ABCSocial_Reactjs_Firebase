

export default function Avatar({path, width, height, className}) {
    return <image alt="img-avatar" src={path} className={`rounded-[${width/2}px]`} />
}


