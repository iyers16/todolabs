
import React from 'react';
import { ProductInfo } from '../types';
import Typewriter from '../components/Typewriter';
// import AgentTerminal from '../components/AgentTerminal';
import { Layers, Activity, Database, CheckCircle2 } from 'lucide-react';

interface ProductPageProps {
  product: ProductInfo;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-green-900/50 pb-6">
        <div>
          <div className="text-green-800 text-xs font-mono mb-2">PRODUCT_ID: {product.id.toUpperCase()} // STATUS: {product.status}</div>
          <h1 className="text-4xl font-bold mb-2">
            <Typewriter text={product.name.toUpperCase()} speed={100} />
          </h1>
          <p className="text-green-400 text-lg italic">{product.tagline}</p>
        </div>
        <div className="bg-green-900/10 border border-green-900 px-4 py-2 text-xs font-mono">
          BETA
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <section>
            <h3 className="text-green-800 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Database size={14} /> System Description
            </h3>
            <p className="text-green-700 leading-relaxed">
              {product.description}
            </p>
          </section>

          <section>
            <h3 className="text-green-800 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Layers size={14} /> Key Capabilities
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 size={16} className="text-green-900 mt-1 shrink-0 group-hover:text-green-500" />
                  <span className="text-green-600">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* <section className="bg-black/40 border border-green-900/30 p-6 rounded">
            <h3 className="text-green-800 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity size={14} /> Live Beta Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-[10px] text-green-900">UPTIME</div>
                <div className="text-xl font-mono">99.98%</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-green-900">REASONING_NODES</div>
                <div className="text-xl font-mono">1,024</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-green-900">AVG_LATENCY</div>
                <div className="text-xl font-mono">180ms</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-green-900">AGENTS_ACTIVE</div>
                <div className="text-xl font-mono">4,192</div>
              </div>
            </div>
          </section> */}
        </div>

        {/* <div className="space-y-6">
          <div className="text-green-800 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Interact with the {product.name} Reasoning Core
          </div>
          <AgentTerminal product={product} />
          <div className="text-[10px] text-green-800 italic text-center">
            * This terminal connects directly to the {product.name} Beta environment. 
            Inputs are logged for training purposes.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductPage;
