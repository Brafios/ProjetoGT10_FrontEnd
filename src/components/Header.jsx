import { useState } from 'react';
import { useAuth } from "../pages/AuthContext";
import logo from "../assets/img/LogoSimples.png";
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
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Filiadas', description: '', href: '/associacoes' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { usuarioLogado, logout } = useAuth();

  return (
    <div className="bg-[#263238]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">FACC</span>
            <img alt="Logo" src={logo} className="h-20 w-auto" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-lg font-semibold text-white no-underline">
            Home
          </a>
          
          <a href="/em-construcao" className="text-lg font-semibold text-white no-underline">
            Sobre
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-white">
              Associações
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 no-underline text-lg">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/em-construcao" className="text-lg font-semibold text-white no-underline">Filia-se</a>
          <a href="/em-construcao" className="text-lg font-semibold text-white no-underline">Benefícios</a>
          <a href="/em-construcao" className="text-lg font-semibold text-white no-underline">Notícias</a>
          <a href="/contato" className="text-lg font-semibold text-white no-underline">Contato</a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {usuarioLogado ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md bg-white p-2 text-sm font-medium text-black">
                  <UserCircleIcon className="w-6 h-6" />
                </Menu.Button>
              </div>

              <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        logout();
                        window.location.href = "/login";
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <div>
              <button onClick={() => {
                        window.location.href = "/login";
                      }}
              className= 'text-[#263238] bg-white hover:bg-[#212b30] text-lg font-semibold no-underline rounded-md p-2'>
                Login
              </button>
              <button onClick={() => {
                        window.location.href = "/Register";
                      }}
               className= 'text-[#263238] bg-white hover:bg-[#212b30] text-lg font-semibold no-underline rounded-md p-2 ml-2'>
                Registrar
              </button>
            </div>

          )}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/home" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 bg-white">
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
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
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Filia-se</a>
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Benefícios</a>
                <a href="/em-construcao" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Notícias</a>
                <a href="/contato" className="block rounded-lg px-3 py-2 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">Contato</a>
              </div>
              <div className="py-6">
                {usuarioLogado ? (
                  <button
                    onClick={() => {
                      logout();
                      window.location.href = "/login";
                    }}
                    className="block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                ) : (
                  <a href="/login" className="block rounded-lg px-3 py-2.5 text-base font-semibold no-underline text-gray-900 hover:bg-gray-50">
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}


