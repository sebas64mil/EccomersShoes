import React from "react";

export default function ProductCard({
  image,
  title,
  price,
  discountPrice,
  variant = "normal",
}) {
  const hasDiscount = discountPrice && discountPrice < price;
  const discountPercent = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div
className={`
  bg-white hover:bg-gray-100 transition-all duration-200 cursor-pointer h-fit w-full
  ${variant === "large" ? "p-4" : "p-3"}
`}
    >
      
      {/* Imagen */}
      <div
  className={`
    w-full overflow-hidden rounded-lg
    ${variant === "large" ? "aspect-[4/3]" : "aspect-[4/5]"}
  `}
>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">

        {/* Nombre */}
        <p
          className={`
            ${variant === "large" ? "text-base" : "text-sm"}
            text-gray-800 line-clamp-2
          `}
        >
          {title}
        </p>

        {/* Precios */}
        <div className="flex flex-col">

          {hasDiscount ? (
            <>
              {/* Precio original */}
              <span className="text-xs text-gray-400 line-through">
                ${price.toLocaleString()}
              </span>

              {/* Precio con descuento */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`
                    ${variant === "large" ? "text-xl" : "text-lg"}
                    font-semibold text-gray-900
                  `}
                >
                  ${discountPrice.toLocaleString()}
                </span>

                <span className="text-green-600 text-sm font-medium">
                  {discountPercent}% OFF
                </span>
              </div>
            </>
          ) : (
            <span
              className={`
                ${variant === "large" ? "text-xl" : "text-lg"}
                font-semibold text-gray-900
              `}
            >
              ${price.toLocaleString()}
            </span>
          )}

        </div>
      </div>
    </div>
  );
}