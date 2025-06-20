import { useForm } from 'react-hook-form';
import API from '../../Api';
import Button from '../Button';
import FormInput from '../FormInput';

const AssociacaoForm = ({ associacaoToEdit, onSave }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: associacaoToEdit || {}
    });

    const onSubmit = async (data) => {
        try {
            if (associacaoToEdit) {
                await API.put(`/associacoes/${associacaoToEdit.id}`, data);
            } else {
                await API.post('/associacoes', data);
            }
            onSave(); 
        } catch (error) {
            console.error("Erro ao salvar associação", error);
            alert("Falha ao salvar. Verifique os dados e tente novamente.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-4">{associacaoToEdit ? 'Editar Associação' : 'Adicionar Nova Associação'}</h2>
            
            <FormInput label="Nome" {...register("nome", { required: true })} />
            {errors.nome && <span className="text-red-500">Nome é obrigatório.</span>}

            <FormInput label="Cidade" {...register("cidade")} />
            <FormInput label="CNPJ" {...register("cnpj", { required: true })} />
            {errors.cnpj && <span className="text-red-500">CNPJ é obrigatório.</span>}

            <FormInput label="Email" type="email" {...register("email")} />
            <FormInput label="Telefone" {...register("telefone")} />
            <FormInput label="Endereço" {...register("endereco")} />
            <FormInput label="Representante" {...register("representante")} />
            <FormInput label="Descrição" {...register("descricao")} />
            <FormInput label="Data de Fundação" type="date" {...register("data_fundacao")} />
            
            <Button type="submit" className="mt-4 w-full">
                Salvar
            </Button>
        </form>
    );
};

export default AssociacaoForm;