import Link from "next/link"

type Props = {
  label: string,
  href: string
}

const NavItem = ({label, href = '/'}: Props) => {
  return (
    <>
    <Link 
      href={href} 
      className="text-heading-4 text-gray-70 font-robo font-bold">
      {label}
    </Link>
    </>
  )
}

export default NavItem