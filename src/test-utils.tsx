import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import Providers from './providers/providers'


const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: Providers, ...options})

export * from '@testing-library/react'
export {customRender as render}