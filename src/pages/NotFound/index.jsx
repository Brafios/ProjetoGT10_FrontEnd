import NotFoundImg from "../../assets/img/NotFound.png";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';

const NotFound = () => {

    const navegate = useNavigate()

    const voltar = () => {
        navegate('/')
    }

    return (
        <>
            <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 px-4">
                <div className="mb-6">
                    <img src={NotFoundImg}
                        alt="Página não encontrada"
                        className="w-full max-w-sm md:max-w-xl lg:max-w-2x1"
                    />
                </div>
                <div className="mt-10">
                    <Button
                        type="button"
                        onClick={voltar}
                        className="w-[150px] h-10"
                    >
                        Voltar
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NotFound
