import React, { useState } from "react";
import { FlatList } from "react-native";
import { Text } from "../Text";
import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { IProduct } from "../../types/IProducts";

interface MenuProps {
  onAddToCart: (product: IProduct) => void;
  products: IProduct[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | IProduct>(null);

  function handleOpenModal(product: IProduct) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        ItemSeparatorComponent={Separator}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://10.0.0.103:3003/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="500">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="500">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />
    </>
  );
}
