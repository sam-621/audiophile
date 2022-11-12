export const ProductKeys = {
  all: ['products'] as const,
  detail: (id: string) => [...ProductKeys.all, id] as const
}
