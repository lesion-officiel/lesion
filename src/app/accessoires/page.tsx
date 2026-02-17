'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { accessoires } from '@/data/products'

const categories = ['Tout', 'Casquettes', 'Bonnets', 'Box']

export default function AccessoiresPage() {
    return (
        <>
            <Header />

            {/* Hero */}
            <section className="pt-24 pb-12 bg-white">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Nos accessoires</h1>
                        <p className="text-lg text-neutral-600 max-w-xl">
                            Complétez votre style avec nos accessoires uniques, conçus avec le même soin que nos vêtements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-16 z-30 bg-white border-b border-neutral-200">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between py-4 overflow-x-auto">
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${cat === 'Tout'
                                        ? 'bg-black text-white'
                                        : 'bg-neutral-100 text-black hover:bg-neutral-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center gap-4">
                            <span className="text-sm text-neutral-500">{accessoires.length} articles</span>
                            <select className="px-4 py-2 text-sm bg-neutral-100 rounded-full border-0 focus:outline-none cursor-pointer">
                                <option>Trier par</option>
                                <option>Prix croissant</option>
                                <option>Prix décroissant</option>
                                <option>Nouveautés</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 bg-neutral-50">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                        {accessoires.map((product, i) => (
                            <motion.article
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                            >
                                <Link href={`/accessoires/${product.id}`} className="group block">
                                    <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-4 border border-neutral-100">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {!product.inStock && product.tag && (
                                            <span className="absolute top-4 left-4 px-3 py-1.5 text-white text-xs font-medium rounded-full bg-red-600">
                                                {product.tag}
                                            </span>
                                        )}
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <button className="w-full py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-100 transition-colors shadow-lg">
                                                Aperçu rapide
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-neutral-500 mb-1">{product.collectionName}</p>
                                        <h3 className="font-medium group-hover:underline">{product.name}</h3>
                                        <p className="text-neutral-600">{product.price}</p>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
