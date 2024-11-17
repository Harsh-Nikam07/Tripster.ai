import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center p-2 px-4 shadow-sm">
        <img className="w-40" src="/tripster-main-logo.svg" alt="Tripster Logo" />
        <Button>Sign up</Button>
    </div>
    </>
  )
}

export default Header
