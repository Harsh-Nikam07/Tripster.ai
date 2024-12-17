import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center p-2 px-4 shadow-sm sticky top-0 bg-gray-00 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 z-10">
        <a href="/">
        <img className="w-40" src="/tripster-main-logo.svg" alt="Tripster Logo" />
        </a>
        <Button>Sign up</Button>
    </div>
    </>
  )
}

export default Header
