import { Slot, usePathname } from "expo-router";
import React from "react";
import { AddressContextProvider } from "../providers/AddressProvider";
import { ProductsProvider as ProductsContextProvider } from "../providers/ProductsProvider";

export default function Layout() {
  const pathname = usePathname();
  return (
    <AddressContextProvider>
      {pathname === "/" || pathname === "" ? (
        <Slot />
      ) : (
        <ProductsContextProvider>
          <Slot />
        </ProductsContextProvider>
      )}
    </AddressContextProvider>
  );
}
