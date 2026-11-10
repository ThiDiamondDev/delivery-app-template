import React, { createContext, useEffect, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Product from "../interfaces/Product";
import ProductContext, { DefaultProductContext } from "../interfaces/ProductContext";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "../data/mockProducts";

export const GlobalProductsContext = createContext<ProductContext>(DefaultProductContext);

interface Props {
  children: React.ReactNode;
}


export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  // 🚀 Simulate a swift local state hydration parse layer instead of GraphQL calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setCategories(MOCK_CATEGORIES);
      setProducts(MOCK_PRODUCTS);
      setIsLoading(false);
    }, 600); // Small fluid delay to let loading layouts render smoothly

    return () => clearTimeout(timer);
  }, []);

  const addProduct = (product: Product, quantityToAdd: number) => {
    const index = cartProducts.findIndex((p) => p.id === product.id);
    if (index === -1) {
      setCartProducts([
        ...cartProducts,
        { ...product, quantity: quantityToAdd },
      ]);
    } else {
      const updatedProducts = [...cartProducts];
      if (updatedProducts[index].quantity + quantityToAdd <= 99) {
        updatedProducts[index].quantity += quantityToAdd;
        setCartProducts(updatedProducts);
      }
    }
  };

  const subtractProduct = (product: Product, quantityToAdd: number) => {
    const index = cartProducts.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const updatedProducts = [...cartProducts];
      if (updatedProducts[index].quantity - quantityToAdd >= 1) {
        updatedProducts[index].quantity -= quantityToAdd;
        setCartProducts(updatedProducts);
      }
    }
  };

  const removeProduct = (id: string) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const filterByCategory = (category: string) => {
    return products.filter((product) => product.category.title === category);
  };

  const getTotal = () => {
    let total = 0,
      itemsCount = 0;
    for (let product of cartProducts) {
      itemsCount += product.quantity;
      total += product.price * product.quantity;
    }
    return { itemsCount, total };
  };

  const containerStyle: StyleProp<ViewStyle> = {
    opacity: isLoading ? 0 : 1,
    flex: 1,
  };

  return (
    <GlobalProductsContext.Provider
      value={{
        products,
        categories,
        selectedProduct,
        cartProducts,
        addProduct,
        filterByCategory,
        getTotal,
        removeProduct,
        setSelectedProduct,
        subtractProduct,
      }}
    >
      {/* Universal layout render tree container wrapping */}
      <View style={containerStyle}>{children}</View>
    </GlobalProductsContext.Provider>
  );
};
