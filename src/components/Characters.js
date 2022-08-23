
import { useQuery } from 'react-query'
import { CardCharacter } from './CardCharacter'

export const Characters = () => {

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    return response.json()
  }

  const { data, status} = useQuery("characters", fetchCharacters )

  if(status === 'loading'){
    return <div>loading...</div>
  }

  if(status === 'error'){
    return <div>error</div>
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <CardCharacter character={character}/>
      ))}
    </div>
  )
}
