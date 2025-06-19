import { useState, useEffect, Fragment } from 'react';
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
  Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon, 
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Filiadas', description: '', href: '/associacoes' }
];

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
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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
    
    return ( 
      <div>
        <nav aria-label="Global" className="bg-[--secondary-color] fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 lg:px-8 shadow-lg" style={{ minHeight: "60px" }}>
          <div className="flex items-center">
            <div className="flex ml-8 lg:flex-1"><a href="/"><img alt="Logo" src={logo} className="h-[70px] w-auto" /></a></div>
          </div>
          
          <PopoverGroup className="hidden ml-56 lg:flex lg:gap-x-12">
             <a href="/" className="text-[--tertiary-text] text-lg font-semibold no-underline">Home</a>
             <a href="/about" className="text-[--tertiary-text] text-lg font-semibold no-underline">Sobre</a>
             <Popover className="relative">
              <PopoverButton className="text-[--tertiary-text] flex items-center gap-x-1 text-lg font-semibold outline-none">
                Associações
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">{products.map((item) => (<div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"><div className="flex-auto"><a href={item.href} className="text-gray-900 text-lg block font-semibold no-underline">{item.name}</a></div></div>))}</div>
              </PopoverPanel>
            </Popover>
             <a href="/EmConstrucao" className="text-[--tertiary-text] text-lg font-semibold no-underline">Serviços</a>
             <a href="/EmConstrucao" className="text-[--tertiary-text] text-lg font-semibold no-underline">Notícias</a>
             <a href="/contato" className="text-[--tertiary-text] text-lg font-semibold no-underline">Contato</a>
          </PopoverGroup>

          <div className="hidden mr-24 lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <button onClick={toggleTheme} className="text-[--tertiary-text] mr-16 transition p-2 rounded-full" aria-label="Alternar tema">
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
            
            {user ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="flex items-center rounded-full text-[--tertiary-text] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Abrir menu do usuário</span>
                    <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
                  </MenuButton>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                  <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <MenuItem><span className="block px-4 py-2 text-sm text-gray-500 truncate">{user.email}</span></MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button onClick={handleLogout} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex w-full items-center rounded-md px-4 py-2 text-sm`}>
                            Sair
                          </button>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              
              <button
                onClick={() => navigate("/login")}
                className="text-[--secondary-color] -ml-7 -mr-6 bg-[--button-secondary-color] hover:bg-[#0071BC] text-lg font-semibold no-underline rounded-md px-4 py-2"
              >
                Login
              </button>
            )}
          </div>
          
          <div className="flex items-center lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white">
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 text-black" />
            </button>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5"><img alt="" src={logo} className="h-8 w-auto" /></a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700"><XMarkIcon aria-hidden="true" className="size-6" /></button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                </div>
                <div className="py-6">
                  {user ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold truncate">{user.email}</span>
                      <button onClick={handleLogout} className="text-gray-900 font-semibold">Sair</button>
                    </div>
                  ) : (
                    <a href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Login</a>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    );
}
 
export default Header;