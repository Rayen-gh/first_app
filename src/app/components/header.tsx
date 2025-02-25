import Link from "next/link";
export default function Home() {
    return (
     <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
    <a href="/home" className="text-sm/6 font-semibold  text-gray-900">Home</a>
    <a href="/products" className="text-sm/6 font-semibold  text-gray-900">Products</a>
      <a href="/about_us" className="text-sm/6 font-semibold text-gray-900">About Us</a>
      <a href="/contact" className="text-sm/6 font-semibold text-gray-900">Contact</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/login" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  
</header>

    )
  }