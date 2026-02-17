'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { allProducts, vetements, accessoires, collections } from '@/data/products'

// Featured products for hero section - Floraison collection
const featuredCollection = allProducts.filter(p => p.collection === 'floraison')

export default function Home() {
    return (
        <>
            <Header />

            {/* Hero - Large Image Section */}
            <section className="relative h-screen min-h-[700px]">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[25vw] font-bold text-white/5">L</span>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-end pb-20 lg:pb-32">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-10 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-2xl"
                        >
                            <p className="text-sm uppercase tracking-widest text-white/60 mb-4">
                                Dernière collection
                            </p>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-none mb-6">
                                Floraison
                            </h1>
                            <p className="text-lg text-white/70 mb-8 max-w-lg">
                                La nature reprend ses droits. Découvrez notre dernière collection inspirée par l'éveil du printemps.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/vetements"
                                    className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
                                >
                                    Découvrir
                                </Link>
                                <Link
                                    href="/a-propos"
                                    className="px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                                >
                                    Notre histoire
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Collection - Toy Packaging Style */}
            <section className="py-24 bg-neutral-100">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2">Dernière collection</p>
                            <h2 className="text-3xl lg:text-4xl font-bold">Floraison</h2>
                        </div>
                        <Link href="/vetements" className="text-sm font-medium underline hover:no-underline">
                            Voir tout →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredCollection.map((product, i) => (
                            <motion.article
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <Link href={`/vetements/${product.id}`} className="block">
                                    {/* Toy Packaging Frame */}
                                    <div className="relative aspect-[3/4] bg-white rounded-3xl overflow-hidden">
                                        {/* Product Image */}
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Tag */}
                                        {!product.inStock && product.tag && (
                                            <div className="absolute top-6 left-6 px-4 py-2 text-white text-xs font-medium rounded-full z-20 bg-red-600">
                                                {product.tag}
                                            </div>
                                        )}

                                        {/* Info panel at bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm z-20 border-t border-neutral-100">
                                            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                                            <p className="text-neutral-600">{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos Vêtements */}
            <section className="py-24 bg-white">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold">Nos vêtements</h2>
                        <Link href="/vetements" className="text-sm font-medium underline hover:no-underline">
                            Voir tout →
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {vetements.map((product, i) => (
                            <motion.article
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Link href={`/vetements/${product.id}`} className="group block">
                                    <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-4 border border-neutral-100">
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

            {/* Nos Accessoires */}
            <section className="py-24 bg-neutral-100">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold">Nos accessoires</h2>
                        <Link href="/accessoires" className="text-sm font-medium underline hover:no-underline">
                            Voir tout →
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {accessoires.map((product, i) => (
                            <motion.article
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
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

            {/* Newsletter Banner */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">Rejoignez la communauté</h2>
                    <p className="text-neutral-400 mb-8">
                        Recevez en avant-première nos nouveautés et offres exclusives.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    )
}
