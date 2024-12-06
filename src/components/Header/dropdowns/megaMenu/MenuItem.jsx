
export default function MenuItem({ item }) {

  return (
    <li className="py-1">
      <p className="text-neutral-600 text-sm">
        {item.label}
      </p>
    </li>
  )
}