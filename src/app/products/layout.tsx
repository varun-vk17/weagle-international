import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Weagle Product Catalogue | Bulk Spices, Masalas & Seasonings for Export',
    description: 'Browse our complete range of export-quality Indian spices. From turmeric and chilli powder to custom masala blends and seasonings. Available for bulk and private label.',
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
