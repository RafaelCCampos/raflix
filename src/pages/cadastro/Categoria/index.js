import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria () {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const [values, setValues] = useState(valoresIniciais);

    function setValue (key, value){
        // key: nome, descricao, cor
        setValues({
            ...values,
            [key]: value, //nome:'nome categoria'
        })
    };

    function handleChange(infosDoEvento) {
        //const { getAttribute, value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
            );
        };

    useEffect( () => {
        const URL = 'http://localhost:8080/categorias';

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
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>
               
                <FormField
                    label="Categoria"
                    type="text"
                    value={values.nome}
                    name="nome"
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
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome}
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