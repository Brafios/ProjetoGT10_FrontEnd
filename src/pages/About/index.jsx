import Tittle from "../../components/Tittle";


const About = () => {
    return ( 
         <div className="h-screen w-screen flex justify-center items-center mt-28">
            <div className="flex flex-col items-center w-full max-w-3xl bg-gray-300 p-8 rounded shadow-lg">
                <Tittle>
                    Sobre
                </Tittle>
                <p className="text-lg text-justify font-serif mb-6 text-gray-700">
                    Federação do Comércio foi criada para ajudar associações e empresários ganhar visibilidade e destaque.
                </p>
            </div>
        </div>
     );
}
 
export default About;