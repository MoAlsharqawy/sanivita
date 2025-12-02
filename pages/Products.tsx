import React, { useState } from 'react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Search, Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.includes(searchTerm) || product.description.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">منتجاتنا</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">تصفح مجموعتنا المتميزة من المكملات الغذائية المصممة لتعزيز صحتك ورفاهيتك.</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="ابحث عن منتج..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                />
                <Search className="absolute right-4 top-3.5 text-slate-400 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <Filter className="w-5 h-5 text-slate-400 ml-2 flex-shrink-0" />
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                            selectedCategory === cat 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {cat === 'all' ? 'الكل' : cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={setSelectedProduct}
                />
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">لم يتم العثور على نتائج</h3>
                <p className="text-slate-500">جرب البحث بكلمات مختلفة أو تغيير التصنيف.</p>
            </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default ProductsPage;