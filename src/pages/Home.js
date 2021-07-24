import {React, useEffect, useState} from 'react';
import { Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


function Home(){
    const [desc, setDesc ] = useState('');
    const [price, setPrice ] = useState('');
    const [inventory, setInventory ] = useState('');
    const [category, setCategory ] = useState('');
    const [storage, setStorage] = useState([])

    useEffect(() => {
        let products = JSON.parse(localStorage.getItem('produtos'));
        if (products) {
            setStorage(products)
        }
    }, [])

    /* Inserir produtos no Carrinho */
    function handleSubmit(e) {
        e.preventDefault()

        toast.success(' Produto adicionado ao carrinho! ');

    }

    return (
        <Container>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
            <div className="card-container">
                {storage.map((product) => (       
                    <div className="card">
                        <h3 className="product-name" value={desc}>{product.desc}</h3>
                        <img src="https://image.freepik.com/vetores-gratis/caixa_53876-37455.jpg" alt=""/>
                        <p className="description">Em {product.category}</p>
                        <span className="price" >Preço: R$ {product.price}</span>
                        <button className="buy-button" >Adicionar ao carrinho</button>
                </div>
                ))}
            </div>
            </form>
                    
        </Container>

    )
}

export default Home;