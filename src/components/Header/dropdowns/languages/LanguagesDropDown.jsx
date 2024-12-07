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
    <div className="animate-fade-up animate-once animate-duration-200 absolute lg:top-[6.5vh] md:top-[5.5vh] top-[7.5vh] md:-left-24 lg:-left-32 left-3 right-3 md:right-0 shadow-dropdowns bg-neutral-50 md:w-40 rounded-md overflow-hidden py-1">
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