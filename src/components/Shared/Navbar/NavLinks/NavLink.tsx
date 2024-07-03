import { Link } from "@/navigation";

interface NavLinkProps {
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  return (
    <Link href={url}>
      <p className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
        {name}
      </p>
    </Link>
  );
}
