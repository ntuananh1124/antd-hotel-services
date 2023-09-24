import "./CardItem.scss";

export default function CardItem({title ,style}) {
    return (
        <>
            <div className="item" style={style}>
                {title && <h4 className="item__title">{title}</h4>}
            </div>
        </>
    )
}