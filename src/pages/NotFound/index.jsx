import NotFoundImg from "../../assets/img/NotFound.png";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';

const NotFound = () => {

  const navegate = useNavigate()

  const voltar = () => {
    navegate('/')
  }

    return ( 
<div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
                <div>
                    <img src={NotFoundImg} alt="" />
                </div>
                <div className="-mt-96">
                    <Button
                        type="button"
                        onClick={voltar}
                        className="w-[150px] h-10 self-center"
                    >
                        Voltar
                    </Button>
                </div>
            </div>
     );
}
 
export default NotFound
