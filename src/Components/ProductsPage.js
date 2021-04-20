import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductsPage() {
    const [productsData, setProductsData] = useState('')

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
            <div className='col'>
                {(Object.keys(productsData).length > 0)}
            </div>
        </div>
    )
}


export default ProductsPage
