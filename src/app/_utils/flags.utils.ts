export const isProd = process.env.NODE_ENV === 'production'

export const isClientSide = typeof window !== 'undefined'
