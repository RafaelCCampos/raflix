import { useState} from 'react';

function useForm(valoresIniciais) {

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

    function clearForm(valoresIniciais) {
        setValues(valoresIniciais)
    }

    return {
        values,
        handleChange,
        clearForm,
    }
}

export default useForm;