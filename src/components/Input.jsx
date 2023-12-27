import style from "./Input.module.css";

export function Input({ icon: Icon, ...props }) {
    return (
        <div className={style.container}>
            {Icon && <Icon size="20"/>}
            <input {...props}  />
        </div>
    );
}
