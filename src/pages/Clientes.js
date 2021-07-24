import React, {useState, useEffect} from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText, Col, Row , Alert } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';
   
const Clientes = (props) => {
    const [username, setUsername ] = useState('');
    const [useremail, setUseremail ] = useState('');
    const [birthdate, setBirthdate ] = useState('');
    const [userdoc, setUserdoc ] = useState('');
    const [usertel, setUsertel ] = useState('');
    /* Endereço */
    const [city, setCity ] = useState('');
    const [address, setAddress ] = useState('');
    const [state, setState ] = useState('');
    const [zip, setZip ] = useState('');   

    const [storage, setStorage] = useState([])

    useEffect(() => {
        const clientes = JSON.parse(localStorage.getItem('clientes'))
        if (clientes) {
            setStorage(clientes)
        }
    }, [])
    
    /* Inserir clientes no LocalStorage */
    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            username, useremail, birthdate, userdoc, usertel, city, address, state, zip
        }

        let newClients = JSON.stringify([...storage || [], data])

        localStorage.setItem('clientes', newClients)

        setStorage(JSON.parse(newClients))

        toast.success(' Cliente cadastrado com sucesso! ');

    }

    return (
        <Container>
             <ToastContainer/>
             <h4> Dados do Cliente </h4>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="Name">Nome</Label>
                <Input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu nome completo" />
            </FormGroup>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" value={useremail} onChange={e => setUseremail(e.target.value)} placeholder="Digite seu email" />
            </FormGroup>
            <FormGroup>
                <Label for="Document">Documento</Label>
                <Input type="text" name="document" value={userdoc} onChange={e => setUserdoc(e.target.value)} placeholder="Digite seu CPF ou RG" />
            </FormGroup>
            <FormGroup>
            <Label for="exampleDate">Data de Nascimento</Label>
            <Input
                type="date"
                name="birthdate"
                value={birthdate} onChange={e => setBirthdate(e.target.value)}
                placeholder="Data de nascimento"/>
            </FormGroup>
            <FormGroup>
                <Label for="telephone">Telefone</Label>
                <Input type="text" name="tel" value={usertel} onChange={e => setUsertel(e.target.value)} placeholder="(xx)xxxx-xxxx" />
            </FormGroup>
            <h4> Endereço de Entrega</h4>
            <FormGroup>
                <Label for="Address">Endereço</Label>
                <Input type="text" name="address"  value={address} onChange={e => setAddress(e.target.value)} placeholder="Preencha com seu endereço"/>
            </FormGroup>
            <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label for="exampleCity">Cidade</Label>
                    <Input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="exampleState">Estado</Label>
                    <Input type="text" name="state" value={state} onChange={e => setState(e.target.value)} />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="exampleZip">CEP</Label>
                    <Input type="text" name="zip" value={zip} onChange={e => setZip(e.target.value)} />
                </FormGroup>  
                </Col>
            </Row>
            <Button color="success">Enviar</Button>
            </Form>
        </Container>
      );
    }


export default Clientes;