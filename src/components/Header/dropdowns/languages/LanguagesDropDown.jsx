import { DE, ES, IT, RU, US } from "country-flag-icons/react/3x2"

export default function LanguagesDropDown({ currentLanguage }) {
  const languagesList = [
    {
      name: 'Spanish',
      flag: <ES title="Spanish" />
    },
    {
      name: 'German',
      flag: <DE title="German" />
    },
    {
      name: 'Italian',
      flag: <IT title="Italian" />
    },
    {
      name: 'Russian',
      flag: <RU title="Russian" />
    },
    {
      name: 'English',
      flag: <US title="English" />
    },
  ]

  return (
    <div className="absolute top-[8vh] -left-[9vw] bg-neutral-50 w-40 rounded-md overflow-hidden py-1">
      <ul className="flex flex-col text-sm">
        {
          languagesList.map((item) => (
            <li className="flex gap-2 items-center hover:bg-neutral-200 px-5 py-2" onClick={()=>currentLanguage(item)}>
              <div className="w-5">
                {item.flag}
              </div>
              <p>{item.name}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}