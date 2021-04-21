import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function ItemPage(props) {
    let { id } = useParams();
    const product = props.productsData.find(item => item.id === parseInt(id))
    console.log(product)
    return (
        <div className="row-md-12 row-sm-12">
            <div className="card text-center">
                <div className="card-header">
                    {product && product.name}
                </div>
                <div className="card-body">
                    {product.description}
                    <h5 className="card-title"></h5>
                    ${product.price}
                    <p className="card-text"></p>
                    <Link to="/">
                        <button type="button">Back to Products Page</button></Link>
                </div>
            </div>

        </div>
    )

}

