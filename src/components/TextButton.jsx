import style from './TextButton.module.css'

export function TextButton({ title, ...rest }) {
    return (
        <div 
        className={style.container}
        type="button" {...rest}>
            {title}
        </div>
    )
}