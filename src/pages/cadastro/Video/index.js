import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link, useHistory} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo () {

    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoriasTitulos = categorias.map( ({titulo}) => titulo);

    const {handleChange, values } = useForm({
        titulo: 'Título do video',
        url: 'https://www.youtube.com/watch?v=8o5PSKDsMuA',
        categoria: 'Others',
    });

    useEffect(() => {
        categoriasRepository.getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
    }, []);
    
    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Video cadastrado com sucesso');
                        history.push('/');
                    })
                    .catch( () => {
                        console.log('Erro ao tentar cadastrar o video')
                    });
            }}>
                <FormField
                    label="Título do Video"
                    value={values.titulo}
                    name="titulo"
                    onChange={handleChange}
                />

                <FormField
                    label="URL"
                    value={values.url}
                    name="url"
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    value={values.categoria}
                    name="categoria"
                    onChange={handleChange}
                    suggestions={categoriasTitulos}
                />
                <Button type="submit">
                    Cadastrar
                </Button>

            </form>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>

                
        </PageDefault>
    )
}

export default CadastroVideo;