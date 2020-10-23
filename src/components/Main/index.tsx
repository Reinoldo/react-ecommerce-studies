import * as S from './styles'

const Main = ({
  title = 'React avancado',
  description = 'Bem vindo ao curso de react, typescript e next js'
}) => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Um atomo em formato de hexagono com o texto React avançado do lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="um desenvolvedor olhando para 3 monitores com codigo"
    />
  </S.Wrapper>
)
export default Main
