import { Link } from "react-router-dom"
export default function ProductsPage(props) {

    // const buttonHandler = () => {
    //     setProductData('')
    // }

    return (
        <div className='row'>
            {props.productsData.map((item, index) => {
                return (
                    <div className='col-md-3 col-sm-12 mt-2' key={index}>
                        <div className="card w-100 h-100">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={`/product/${item.id}`}>
                                <button type="button">More Info</button></Link>
                                <Link to="card-link">
                                <button type="button">Add to Cart</button></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

