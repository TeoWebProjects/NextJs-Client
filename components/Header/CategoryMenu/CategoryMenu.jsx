import React from 'react'
import Link from 'next/link'
import {
  Container2,
  CategoryCon,
  Category,
  SubCaterories,
  SubCategory,
  CategoryItem,
  SubCategoryText,
  BoxCategory,
} from './CategoryMenu.style'
const CategoryMenu = () => {
  return (
    <>
      <Container2>
        <CategoryCon>
          <Category>
            <Link href="/products/categories/24">ΓΩΝΙΑΚΗ ΚΑΝΑΠΕΔΕΣ</Link>
          </Category>

          <Category>
            <Link href="/products/categories/38">ΓΡΑΦΕΙΑ</Link>
          </Category>

          <Category>
            <Link href="/products/categories/38">ΝΤΟΥΛΑΠΕΣ</Link>
          </Category>

          <Category>
            <Link href="/products/categories/38">ΚΡΕΒΑΤΙΑ</Link>
          </Category>

          <Category>
            <Link href="/products/categories/38">ΠΟΛΥΘΡΟΝΕΣ</Link>
          </Category>
        </CategoryCon>
      </Container2>
    </>
  )
}

export default CategoryMenu
