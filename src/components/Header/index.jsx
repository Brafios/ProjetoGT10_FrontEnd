import { useState, useEffect, Fragment, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../Api';
import logo from "../../assets/img/logo_sem_fundo.png";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const session = localStorage.getItem('supabase.session');
            if (session) {
                try {
                    const response = await API.get('/auth/me');
                    setUser(response.data);
                } catch (error) {
                    localStorage.removeItem('supabase.session');
                    setUser(null);
                }
            }
        };
        checkUser();
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        const themeString = newTheme ? 'dark' : 'light';
        localStorage.setItem('theme', themeString);
        document.documentElement.classList.toggle('dark', newTheme);
    };
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const handleLogout = async () => {
        try {
            await API.post('/auth/logout');
        } finally {
            localStorage.removeItem('supabase.session');
            setUser(null);
            navigate('/login');
        }
    };


    
    const products = useMemo(() => ([
        { 
          name: 'Filiadas', 
          description: 'Veja as associações filiadas', 
          href: user ? '/admin/associacoes' : '/associacoes',
        }
    ]), [user]); 
  
   const [noticias, setNoticias] = useState([]);

   useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await API.get('/noticias');
                setNoticias(response.data);
            } catch (error) {
                console.error('Erro ao carregar as notícias:', error);
            }
        };
        
        fetchNoticias();
    }, []);

    return (
    <div className="pt-[10px]">
      {/* A NAV é o container principal do cabeçalho */}
      <nav aria-label="Global" className="bg-[--secondary-color] fixed top-0 left-0 w-full z-50 flex items-center justify-center p-4 lg:px-8 shadow-lg" style={{ minHeight: "60px" }}>
        
        {/* Este DIV interno controla a largura máxima e o alinhamento */}
        <div className="w-full max-w-screen-xl flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/"><img alt="Logo" src={logo} className="h-[60px] w-auto sm:h-[65px] lg:h-[70px]" /></a>
          </div>

          {/* Navegação Desktop */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-[--tertiary-text] text-lg font-semibold no-underline">Home</a>
            <a href="/about" className="text-[--tertiary-text] text-lg font-semibold no-underline">Sobre</a>
            <Popover className="relative">
              <PopoverButton className="text-[--tertiary-text] flex items-center gap-x-1 text-lg font-semibold outline-none">
                Associações
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                      <div className="flex-auto">
                        <a href={item.href} className="text-gray-900 text-lg block font-semibold no-underline">{item.name}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="/EmConstrucao" className="text-[--tertiary-text] text-lg font-semibold no-underline">Serviços</a>
            <a href="/noticias" className="text-[--tertiary-text] text-lg font-semibold no-underline">Notícias</a>
            <a href="/contato" className="text-[--tertiary-text] text-lg font-semibold no-underline">Contato</a>
          </PopoverGroup>

          {/* Área Direita: Tema e Autenticação */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <button onClick={toggleTheme} className="text-[--tertiary-text] transition p-2 rounded-full" aria-label="Alternar tema">
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            
            {user ? (
              <Menu as="div" className="relative inline-block text-left">
                {/* ... seu menu de usuário logado ... */}
              </Menu>
            ) : (
              <button onClick={() => navigate("/login")} className="text-[--secondary-color] bg-[--button-secondary-color] hover:bg-[#0071BC] text-lg font-semibold no-underline rounded-md px-4 py-2">
                Login
              </button>
            )}
          </div>
          
          {/* Botão do Menu Mobile */}
          <div className="flex items-center lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white">
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 text-black" />
            </button>
          </div>

        </div> 
        {/* Fim do DIV interno que controla a largura */}
      </nav> 
      {/* Fim da NAV */}

      {/* O Dialog do menu mobile fica fora da NAV */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
           {/* ... conteúdo do menu mobile ... */}
        </DialogPanel>
      </Dialog>
    </div>
  );
}
 
export default Header;