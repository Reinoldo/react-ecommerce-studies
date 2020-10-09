import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the colours correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
    expect(container.firstChild).toMatchSnapshot()
  })
})
