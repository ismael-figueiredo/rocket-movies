import style from "./Button.module.css"

export function Button({ title, loading = false, ...rest }) {
    return (
        <div 
            className={style.container}
            type="button" disabled={loading} {...rest}>
            {loading ? 'Carregando...' : title}
        </div>
    )
}