

export default function CustomIcon  ({component, color, size=20, className=""}) {
    if(size) {
        size = size.replace("px", "")
    }
    return <span className={`text-[${color}] text-[${size}px] ${className}`}>
        {component}
    </span>
}