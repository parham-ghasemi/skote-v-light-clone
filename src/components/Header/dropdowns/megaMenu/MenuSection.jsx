import MenuItem from "./MenuItem";

export default function MenuSection({ list }) {

  return (
    <div className="flex h-full w-10/12">
      {
        list.map((item) => (
          <div className="h-full w-3/12 p-4">
            <p className="font-medium mb-2 text-neutral-700">{item.listHeader}</p>
            <ul>
              {
                item.listItems.map((listItem) => <MenuItem item={listItem} />)
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}