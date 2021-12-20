import React, { useEffect, useState } from 'react'
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
  const [data, setData] = useState([])

  useEffect(async () => {
    const quey = await fetch('http://localhost:5000/api/categories')
    const result = await quey.json()
    setData(result)
  }, [])
  return (
    <>
      <Container2>
        <CategoryCon>
          {data.map((cat) => (
            <Category key={cat._id}>
              <Link href={`/products/categories/${cat._id}`}>{cat.name}</Link>
            </Category>
          ))}
        </CategoryCon>
      </Container2>
    </>
  )
}

export default CategoryMenu
