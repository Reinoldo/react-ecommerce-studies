import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Example/Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
