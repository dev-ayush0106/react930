export default function ProductComponent({ image, title }){
    <div className='product-container'>
        <img src={image} alt={title} />
        <span>{title}</span>
    </div>
}