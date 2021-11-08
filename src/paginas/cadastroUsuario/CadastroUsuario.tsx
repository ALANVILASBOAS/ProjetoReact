//cria o componente
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
            console.log(userResult)
        }

    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value //nome do campo + o valor que o usuario digitou
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Cadastro feito com sucesso')
        } else {
            alert('Dados inconsistentes. Verifique as informações.')
        }
    }
    return (

        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem2">

            </Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" gutterBottom color="initial" component="h3" align="center" style={{ fontWeight: "bold" }}>
                            Cadastrar
                        </Typography>
                        <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="usuario"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="ConfirmarSenha"
                            label="Confirmar senha"
                            variant="outlined"
                            name="ConfirmarSenha"
                            margin="normal"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-nome btmCancelar">
                                <Button type="submit" variant="contained" color="secondary" >
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to="/home" className="text-decorator-nome">
                                <Button type="submit" variant="contained" color="primary" >
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;

// function updatedModel(e: React.ChangeEvent<HTMLInputElement>): void {
//     throw new Error('Function not implemented.');
// }
//direction='row' -> fala que o container deve se comportar como uma linha
//justifyContent='center' -> justificar conteúdo ao centro do container (horizonal)
//alignItems='center' ->  justificar conteúdo ao centro do container (vertical)