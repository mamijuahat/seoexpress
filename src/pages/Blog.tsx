
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Cara Meningkatkan SEO Website Anda dalam 30 Hari',
      description: 'Panduan lengkap untuk meningkatkan peringkat SEO website Anda dan mendapatkan lebih banyak trafik organik.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      category: 'SEO',
      date: '15 Jun 2023',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Strategi Content Marketing yang Efektif untuk Bisnis Kecil',
      description: 'Pelajari bagaimana bisnis kecil dapat memanfaatkan content marketing untuk pertumbuhan yang berkelanjutan.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Content Marketing',
      date: '2 Jul 2023',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Mengoptimalkan Media Sosial untuk Meningkatkan Konversi',
      description: 'Tips dan trik untuk mengubah pengikut media sosial Anda menjadi pelanggan yang membayar.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      category: 'Social Media',
      date: '18 Jul 2023',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Analisis Kompetitor: Cara Memahami dan Mengalahkan Pesaing Anda',
      description: 'Metode praktis untuk menganalisis strategi digital pesaing Anda dan menemukan keunggulan kompetitif.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      category: 'Market Research',
      date: '5 Aug 2023', 
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'Pentingnya Mobile-First Indexing untuk SEO Modern',
      description: 'Mengapa Google memprioritaskan mobile-first indexing dan cara memastikan website Anda siap.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'SEO',
      date: '22 Aug 2023',
      readTime: '4 min'
    },
    {
      id: 6,
      title: 'Email Marketing: Cara Membangun Daftar Email yang Menghasilkan',
      description: 'Strategi untuk membangun dan mengelola daftar email yang meningkatkan penjualan dan loyalitas pelanggan.',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Email Marketing',
      date: '10 Sep 2023',
      readTime: '6 min'
    },
  ];

  // Categories for filtering
  const categories = ['All', 'SEO', 'Content Marketing', 'Social Media', 'Market Research', 'Email Marketing'];

  return (
    <div className="min-h-screen bg-nightwatch-dark text-white">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-nightwatch-dark-blue to-nightwatch-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Blog SEOExpress
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Tips, trik, dan strategi terbaru untuk mengoptimalkan kehadiran online Anda dan meningkatkan peringkat SEO.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm bg-white/10 hover:bg-nightwatch-purple transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-nightwatch-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Featured blog post" 
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-nightwatch-purple text-white text-xs rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                7 Strategi SEO yang Wajib Diterapkan di 2023
              </h2>
              <p className="text-white/70 mb-6">
                Dunia SEO terus berevolusi dengan algoritma Google yang selalu diperbarui. Pelajari 7 strategi penting untuk memastikan website Anda tetap berada di peringkat teratas dalam hasil pencarian.
              </p>
              <div className="flex items-center text-sm text-white/60 mb-6">
                <span>12 Oct 2023</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
              </div>
              <Link 
                to="/blog/7-strategi-seo-2023" 
                className="inline-flex items-center px-6 py-3 bg-nightwatch-purple hover:bg-nightwatch-light-purple transition-colors rounded-lg font-medium"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-nightwatch-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Artikel Terbaru</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-nightwatch-dark-blue border-white/10 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-nightwatch-purple/20 text-nightwatch-light-purple rounded-full">
                      {post.category}
                    </span>
                    <div className="text-xs text-white/60">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white hover:text-nightwatch-light-purple transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-nightwatch-light-purple hover:text-white font-medium flex items-center"
                  >
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-nightwatch-dark-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Dapatkan Tips SEO Terbaru</h2>
            <p className="text-white/70 mb-8">
              Berlangganan newsletter kami untuk mendapatkan tips dan trik SEO terbaru langsung di inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-nightwatch-purple"
              />
              <button className="px-6 py-3 bg-nightwatch-purple hover:bg-nightwatch-light-purple transition-colors rounded-lg font-medium">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
