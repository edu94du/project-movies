import './404.css'

import { Link } from 'react-router-dom'

export default function notFound() {

    return (
        <div className="error">
            <h1>ð Pagina nÃ£o encontrada ð </h1>
           <Link to="/">Voltar para a Home</Link>
        </div>
    )
}