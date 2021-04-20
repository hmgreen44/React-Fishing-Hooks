import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProductsPage() {
    const [productsData, setProductsData] = useState([])

    const axiosGet = () => {
        let apiUrl = 'https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products'
        axios.get(apiUrl)
            .then(function (response) {
                // handle success
                setProductsData(response.data)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(axiosGet, [])

    // const buttonHandler = () => {
    //     setProductData('')
    // }

    return (
        <div className='row'>
            {productsData.map((item, index) => {
                return (
                    <div className='col-md-3 col-sm-12 mt-2' key={index}>
                        <div className="card w-100 h-100">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                {/* <Link to="/ProductPage">
                                <button type="button">More Info</button></Link>
                                <Link to="card-link">
                                <button type="button">Add to Cart</button></Link> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

