interface MenuItemProps {
    title: string;
    description: string;
    url: string;
}
export const MenuItem = (props:MenuItemProps) =>{
    return (
        <div className="flex h-90 flex-col justify-around w-full  px-15 items-center ">
            <img src={props.url} alt="" className="h-30 w-30"/>
            <div className="flex flex-col items-center">
            <p className="text-white text-4xl">{props.title}</p>
            <p className="text-sm text-center text-white">{props.description}</p>
            </div>
            
        </div>
    )
}