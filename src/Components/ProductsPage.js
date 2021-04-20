import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductsPage() {
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
                        <div class="card w-100 h-100">
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <a href="#" class="card-link">More Info</a>
                                <a href="#" class="card-link">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default ProductsPage
