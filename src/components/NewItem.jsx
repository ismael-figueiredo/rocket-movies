import style from "./NewItem.module.css"
import { FiPlus, FiX } from "react-icons/fi"

export function NewItem({ isNew, value, onClick, ...rest }) {
  return (
    <div className={isNew ? style.container : style.isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        placeholder="Novo marcador"
        {...rest}
      />
      <button onClick={onClick} type="button">
        {isNew ? <FiPlus size="24" /> : <FiX size="24" />}
      </button>
    </div>
  )
}
