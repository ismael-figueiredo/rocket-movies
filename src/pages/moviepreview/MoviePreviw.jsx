import style from "./MoviePreviw.module.css"
import { Header } from "../../components/Header"
import { FaArrowLeft, FaRegClock } from "react-icons/fa"
import { TextButton } from "../../components/TextButton"
import { MdStar, MdStarBorder } from "react-icons/md"
import { Tag } from "../../components/Tag"

export function Moviepreviw() {
  const { title, rating, synopsis, tag } = {
    title: "Interestelar",
    rating: 4,
    tag: ["drama", "família", "ficção científica"],
    synopsis:
      "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As 'missões Lázaro' enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.",
  }

  const renderStars = () => {
    const totalStars = 5
    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<MdStar size="20" key={`star_filled_${i}`} />)
    }
    for (let i = rating; i < totalStars; i++) {
      stars.push(<MdStarBorder size="20" key={`star_border_${i}`} />)
    }
    return stars
  }
  const renderTags = () => {
    return tag.map((t, index) => <Tag key={index} text={t} />)
  }
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <div className={style.back}>
          <FaArrowLeft />
          <TextButton title={`Voltar`} />
        </div>
        <div className={style.title}>
          <h2>{title}</h2>
          <div className={style.stars}> {renderStars()}</div>
        </div>
        <div className={style.info}>
          <img src="https://github.com/ismael-figueiredo.png" alt="" />
          <span>Por Ismael Figueiredo</span>
          <FaRegClock />
          <span> 28/12/2023 às 14:00</span>
        </div>
        <div> {tag && renderTags()}</div>
        <p>{synopsis}</p>
      </main>
    </div>
  )
}
