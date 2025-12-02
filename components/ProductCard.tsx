import React from 'react';
import { Product } from '../types';
import { CheckCircle, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
      <div 
        className="relative h-64 overflow-hidden bg-white cursor-pointer p-4 flex items-center justify-center"
        onClick={() => onViewDetails(product)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm border border-slate-100">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col border-t border-slate-50">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
            {product.price && <span className="text-lg font-bold text-secondary-600">{product.price}</span>}
        </div>
        
        <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">الفوائد الرئيسية:</h4>
          <ul className="space-y-1 mb-6">
            {product.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-accent-500 ml-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => onViewDetails(product)}
            className="w-full bg-slate-50 hover:bg-primary-600 text-slate-700 hover:text-white border border-slate-200 hover:border-transparent font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-btn"
          >
             <span>عرض التفاصيل</span>
             <ShoppingCart className="w-4 h-4 text-secondary-500 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;