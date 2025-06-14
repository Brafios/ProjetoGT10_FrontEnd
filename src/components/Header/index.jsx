import { useState, useEffect } from 'react';
import logo from "../../assets/img/logo_sem_fundo.png";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Filiadas', description: '', href: '/associacoes' }
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
      });
    
      const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
      };
    
      useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      }, [isDarkMode]);
    
    return ( 
        <div>
      <nav
        aria-label="Global"
        className="bg-[--secondary-color] fixed top-0 left-0 w-full z-50 flex items-center justify-start p-4 lg:px-8 shadow-lg"
        style={{ minHeight: "60px" }}
      >
        <div className="flex">
          <a href="/" className="-m-1.9 p-1.9">
            <span className="sr-only">FACC</span>
            <img alt="Logo da FC" src={logo} className="h-[70px]  w-48 mr-40" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white"
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-black" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-8">
          <a href="/" className="text-[--tertiary-text] text-lg font-semibold no-underline">Home</a>
          <a href="/about" className="text-[--tertiary-text] text-lg font-semibold no-underline">Sobre</a>
          <Popover className="relative">
            <PopoverButton className="text-[--tertiary-text] flex items-center gap-x-1 text-lg font-semibold">
              Associações
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                    <div className="flex-auto">
                      <a href={item.href} className="text-[--tertiary-text] text-lg block font-semibold no-underline ">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="/EmConstrucao" className="text-[--tertiary-text] text-lg font-semibold no-underline">Serviços</a>
          <a href="/EmConstrucao" className="text-[--tertiary-text] text-lg font-semibold no-underline">Notícias</a>
          <a href="/contato" className="text-[--tertiary-text] text-lg font-semibold no-underline">Contato</a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <button
            onClick={toggleTheme}
            className="text-[--tertiary-text] hover:text-gray-800 transition p-2 rounded-full ml-24"
            aria-label="Alternar tema"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
            
          <div className='ml-5'>
            <button
              onClick={() => { window.location.href = "/login"; }}
              className="text-[--secondary-color] bg-[--button-secondary-color] hover:bg-[#0071BC] text-lg font-semibold no-underline rounded-md p-2 ml-8"
            >
              Login
            </button>
          </div>
          
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 bg-white">
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-10">
                <a href="/" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Home</a>
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Sobre</a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 px-3 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">
                    Associações
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold no-underline text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Serviços</a>
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Notícias</a>
                <a href="/contato" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Contato</a>
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
     );
}
 
export default Header;