import React, {useState, useEffect} from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';

   
function Produtos(props){
    const [desc, setDesc ] = useState('');
    const [price, setPrice ] = useState('');
    const [inventory, setInventory ] = useState('');
    const [category, setCategory ] = useState('');
    const [storage, setStorage] = useState([])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('produtos'))
        if (products) {
            setStorage(products)
        }
    }, [])

     /* Inserir produtos no LocalStorage */
     function handleSubmit(e) {
        e.preventDefault()

        let data = {
            desc, price, inventory, category
        }

        let newProducts = JSON.stringify([...storage || [], data])

        localStorage.setItem('produtos', newProducts)

        setStorage(JSON.parse(newProducts))

        toast.success(' Produto cadastrado com sucesso! ');

    }

    return (
        <Container>
            <ToastContainer/>
                <h4> Cadastrar Produto </h4>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label for="categorySelect">Categoria</Label>
            <Input type="select" name="select" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Selecione</option>
                <option value="Eletrodomésticos"> Eletrodomésticos</option>
                <option value="Eletronicos">Eletronicos</option>
                <option value="Cama, mesa e banho">Cama, mesa e banho</option>
                <option value="Decoração">Decoração</option>
                <option value="Livros">Livros</option>
            </Input>
            </FormGroup>
            <FormGroup>
                <Label for="Name">Descrição</Label>
                <Input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Descrição do produto" />
            </FormGroup>
            <FormGroup>
                <Label for="Email">Preço</Label>
                <Input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="R$ 0,00" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">Estoque</Label>
                <Input
                type="number"
                name="inventory"
                value={inventory}
                onChange={e => setInventory(e.target.value)}
                />
            </FormGroup>
            <Button color="success">Enviar</Button>
            </Form>
        </Container>
    );
}

export default Produtos;