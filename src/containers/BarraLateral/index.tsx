import FiltroCard from '../../components/FiltroCard'
import { Campo } from './styles'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={2} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={4} />
        <FiltroCard legenda="Normal" contador={5} />
        <FiltroCard legenda="Todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
