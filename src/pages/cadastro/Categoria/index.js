import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    useEffect( () => {
        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://raflix23.herokuapp.com/categorias';

        fetch(URL)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });
        /*setTimeout(() => {
            setCategorias([
                ...categorias,
                {
                    id: 1,
                    nome: "Cubing",
                    descricao: "Vídeos de resoluções, tutoriais e dicas sobre cubo mágico.",
                    cor: "cbd1ff"
                },
        
                {
                    id: 2,
                    nome: "Code",
                    descricao: "Vídeos sobre programação e suas tecnologias.",
                    cor: "cbd1ff"
                },
            ]);    
        }, 3 * 1000);*/ 
    }, []);

    
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.titulo}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                clearForm(valoresIniciais);
            }}>
               
                <FormField
                    label="Categoria"
                    type="text"
                    value={values.titulo}
                    name="titulo"
                    onChange={handleChange}
                />
                
                <FormField
                    label="Descrição"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.titulo}${indice}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;