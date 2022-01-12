//styles
import './Recipe.css'

// useFetch hooks
import {useFetch} from '../../hooks/useFetch.js'

//hooks
import {useParams} from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export default function Recipe() {
    const {id} =useParams()

    const {data,isPending,error} = useFetch(`http://localhost:3000/recipes/${id}`)
    const {mode} =useTheme();
    return (
        <div className={`recipe ${mode}`}>
            {error&& <p className='error'>{error}</p>}
            {isPending&& <p className='loading'> Loading...</p>}
            {data &&  <><h2 className='page-title'> {data.title}</h2>
            <p>Takes {data.cookingTime} to cook.</p>
            <ul>{data.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
            <p className="method">{data.method}</p>   </>   }
        </div>
    )
}
