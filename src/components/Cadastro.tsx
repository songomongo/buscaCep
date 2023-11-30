import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import Styles from '../App.module.css';
import axios from 'axios';
import { classicNameResolver } from 'typescript';

const Cadastro = () => {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [password, setPassword] = useState<string>("");
     const [nomeError, setNomeError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [cpfError, setCpfError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const CadastrarUsuario = (e: FormEvent) => {
        e.preventDefault();
         
        setNomeError("")
        setEmailError("")
        setCpfError("")
        setPasswordError("")

        const dados = {
            nome: nome,
            email: email,
            cpf: cpf,
            password: password
        }
console.log(dados)
axios.post('http://10.137.9.136:8001/api/store', dados,
{
    headers: { "Accept": "application/json", "Content-Type": "application/json" }
}).then(function (response) {
    if (response.data.success === false) {

        if ('nome' in response.data.error) {
            setNomeError(response.data.error.nome[0])
        }
        if ('email' in response.data.error) {
            setEmailError(response.data.error.nome[0])
        }
        if ('cpf' in response.data.error) {
            setCpfError(response.data.error.nome[0])
        }
        if ('password' in response.data.error) {
            setPasswordError(response.data.error.nome[0])
        }
    }
          else{
           window.location.href = "/listagem";
        }
         }).catch(function (error) {
            console.log(error);
         })

    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }

       
            if (e.target.name === "email") {
                setEmail(e.target.value);
            }


                if (e.target.name === "cpf") {
                    setCpf(e.target.value);
                }

                    if (e.target.name === "password") {
                        setPassword(e.target.value);
                    }
                }


                    return (
                        <div>
                            <Header />
                            <main className={Styles.main}>
                                <div className='container'>
                                    <div className='card'>
                                        <div className='cadr-body'>
                                            <h5 className='card-title'>Cadastrar Cliente</h5>
                                            <form onSubmit={CadastrarUsuario} className='row g-3'>

                                                <div className='col-6'>
                                                    <label htmlFor="nome" className='form-label' >Nome</label>
                                                    <input type="text"
                                                        name='nome'
                                                        className='form-control'
                                                        required
                                                        onChange={handleState}
                                                    />
                                                    <div className='text-danger'>{nomeError}</div>
                                                    </div>

                                                <div className='col-6'>
                                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                                    <input type="text"
                                                        name='email'
                                                        className='form-control'
                                                        required
                                                        onChange={handleState}
                                                    />
                                                     <div className='text-danger'>{emailError}</div>
                                                    </div>

                                                <div className='col-6'>
                                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                                    <input type="text"
                                                        name='cpf'
                                                        className='form-control'
                                                        required
                                                        onChange={handleState}
                                                    />
                                                     <div className='text-danger'>{cpfError}</div>
                                                    </div>

                                                <div className='col-6'>
                                                    <label htmlFor="password" className='form-label'>Senha</label>
                                                    <input type="text"
                                                        name='password'
                                                        className='form-control'
                                                        required
                                                        onChange={handleState}
                                                    />
                                                     <div className='text-danger'>{passwordError}</div>
                                                    </div>

                                                <div className='col-12' >
                                                    <button type='submit'
                                                        className='btn btn-success btn-sm'>Cadastrar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div >
                            </main >
                            <Footer />
                        </div >
                    );
                }

                export default Cadastro;