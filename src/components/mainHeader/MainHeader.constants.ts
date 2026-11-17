import { createContext } from 'react'
import type {  ModalContextProp } from '@/components/mainHeader/MainHeader.types'

export const ModalContext = createContext<ModalContextProp | null>(null)
