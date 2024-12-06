export default function ProductCard(
    {
        image,
        price,
        title,
        description
    }
) {
    return (
        <div className={'product-card'}>
            <img src={image} alt=""/>
            <div>
                <h2>{title}</h2>
                <h2>$ {price}</h2>
            </div>
            <span>
                {description}
            </span>

            <span>
                Order to delivery
            </span>
        </div>
    )
}