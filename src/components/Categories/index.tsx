import React, { useState } from "react";
import { Category, Icon } from "./styles";
import { Text } from "../Text";
import { FlatList } from "react-native";
import { ICategory } from "../../types/Category";

interface CategoriesProps {
  categories: ICategory[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? "" : categoryId; // deselecionar category

    onSelectCategory(category);

    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <Category
            key={category._id}
            onPress={() => handleSelectCategory(category._id)}
          >
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
