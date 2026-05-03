import { ProductIcon } from "./product-icon";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
  category:
    | "power-tools"
    | "test"
    | "safety"
    | "fasteners"
    | "consumables"
    | "storage"
    | "lighting"
    | "mro";
};

export function ProductCard({
  product,
  cta = "Add to Node",
}: {
  product: Product;
  cta?: string;
}) {
  return (
    <div className="panel p-4 flex flex-col gap-3">
      <div className="aspect-square bg-[var(--bg-deep)] border border-[var(--border-line)] grid place-items-center p-4">
        <ProductIcon
          category={product.category}
          className="w-full h-full max-w-[120px]"
        />
      </div>
      <div>
        <h4 className="font-display text-base tracking-wide uppercase text-white leading-tight">
          {product.name}
        </h4>
        <div className="text-xs text-[var(--text-secondary)] mt-0.5">
          {product.brand}
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="font-display text-lg text-white">{product.price}</div>
        <button className="text-[0.7rem] font-display tracking-[0.16em] uppercase bg-[rgba(245,107,31,0.1)] border border-[rgba(245,107,31,0.4)] text-[var(--orange)] hover:bg-[var(--orange)] hover:text-black px-3 py-2 transition-colors">
          {cta}
        </button>
      </div>
    </div>
  );
}
