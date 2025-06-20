import Tittle from "../../components/Tittle";


const About = () => {
    return ( 
         <div className="min-h-screen w-full flex justify-center items-start bg-gray-100 px-4 py-10">
            <div className="flex flex-col items-center w-full max-w-3xl bg-gray-300 p-6 md:p-8 rounded shadow-lg mt-16 md:mt-28">
                <Tittle>
                    Sobre
                </Tittle>
                <p className="text-base md:text-lg text-justify font-serif mb-6 text-gray-700 leading-relaxed">
                    A Federação do Comércio surgiu da necessidade de unir, representar e fortalecer as empresas que atuam no setor de comércio, serviços e turismo. Com o crescimento das atividades comerciais e a complexidade das relações econômicas, tornou-se essencial a criação de uma entidade que pudesse articular os interesses do setor e promover seu desenvolvimento sustentável.
                    <br></br>
                    <br></br>
                    Inicialmente, empresários do comércio começaram a se organizar em sindicatos para defender seus direitos e buscar melhores condições de atuação. Com o tempo, percebeu-se a importância de uma estrutura mais abrangente, capaz de coordenar esses sindicatos e atuar de forma estratégica na defesa institucional do setor.
                    <br></br>
                    <br></br>
                    Assim nasceu a Federação do Comércio — uma organização comprometida com o fortalecimento do ambiente de negócios, o estímulo à competitividade e o apoio às empresas de todos os portes. Sua missão vai além da representação política: ela promove a capacitação profissional, incentiva a inovação, apoia políticas públicas e contribui para o desenvolvimento social e econômico.
                    <br></br>
                    <br></br>
                    Ao longo do tempo, a federação tornou-se um ponto de articulação entre o setor empresarial e a sociedade, buscando sempre equilíbrio entre os interesses econômicos e o bem-estar coletivo. Por meio de parcerias, programas e iniciativas diversas, ela segue comprometida com o progresso do comércio e com a valorização de quem empreende.
                </p>
            </div>
        </div>
     );
}
 
export default About;