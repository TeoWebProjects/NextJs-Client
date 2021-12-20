import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Theme from '../../../Theme'
import {
  Container,
  Title,
  Forma,
  Box,
  Input,
  SubmitInput,
  Label,
  Select,
  Option,
  TextArea,
} from './CreateProductPage.style'

const CreateProductPage = ({ payload }) => {
  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [fileData, setFileData] = useState()
  const [price, setPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [availability, setAvailability] = useState('')
  const [stock, setStock] = useState(0)

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0])
  }

  const handleIProduct = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('image', fileData)

    const config = {
      method: 'POST',
      body: data,
    }

    const res = await fetch('http://localhost:5000/api/upload', config)
    const url = await res.json()
    const newurl = url.replace(/\\/g, '/')

    const product = {
      name: name,
      sku: sku,
      brand: brand,
      category: category,
      description: description,
      image: newurl,
      price: parseFloat(price),
      discountPrice: parseFloat(discountPrice),
      availability: availability,
      countInStock: parseInt(stock),
    }

    const config2 = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.token}`,
      },
      body: JSON.stringify(product),
    }
    const createProduct = await fetch('http://localhost:5000/api/products', config2)
    const message = createProduct.json()

    e.target.reset()
  }
  return (
    <Theme>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" charset="utf-8" />
      </Head>
      {payload.isAdmin === false ? (
        <>No auth</>
      ) : (
        <Container>
          <Title>Create New Product</Title>
          <Forma onSubmit={handleIProduct}>
            <Box>
              <Label>Name:</Label>
              <Input
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>Sku:</Label>
              <Input
                onChange={(e) => {
                  setSku(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>Description:</Label>
              <TextArea
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>Categories:</Label>
              <Select
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
              >
                <Option value="" defaultValue>
                  None
                </Option>
                {payload.categories.map((category) => (
                  <Option value={category._id} key={category._id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </Box>
            <Box>
              <Label>Brand:</Label>
              <Select
                onChange={(e) => {
                  setBrand(e.target.value)
                }}
              >
                <Option value="" defaultValue>
                  None
                </Option>
                {payload.brands.map((brand) => (
                  <Option value={brand._id} key={brand._id}>
                    {brand.name}
                  </Option>
                ))}
              </Select>
            </Box>
            <Box>
              <Label>Image:</Label>
              <Input type="file" name="image" onChange={fileChangeHandler} />
            </Box>
            <Box>
              <Label>Price:</Label>
              <Input
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>DiscountPrice:</Label>
              <Input
                onChange={(e) => {
                  setDiscountPrice(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>Availability:</Label>
              <Input
                onChange={(e) => {
                  setAvailability(e.target.value)
                }}
              />
            </Box>
            <Box>
              <Label>Stock:</Label>
              <Input
                type="number"
                step="1"
                pattern="^[-/d]/d*$"
                onChange={(e) => {
                  setStock(e.target.value)
                }}
              />
            </Box>

            <SubmitInput type="submit" value="Publish" />
          </Forma>
        </Container>
      )}
    </Theme>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const cookies = context.req.cookies
  let payload
  if (cookies.userInfo && cookies.userInfo.length > 0) {
    if (JSON.parse(cookies.userInfo).isAdmin === true) {
      const categoryQuery = await fetch('http://localhost:5000/api/categories')
      const categoryData = await categoryQuery.json()
      const brandQuery = await fetch('http://localhost:5000/api/brands')
      const brandData = await brandQuery.json()
      payload = {
        isAdmin: true,
        categories: categoryData,
        brands: brandData,
        token: JSON.parse(cookies.userInfo).token,
      }
      return { props: { payload } }
    } else {
      payload = { isAdmin: false }
      return { props: { payload } }
    }
  } else {
    payload = { isAdmin: false }
    return { props: { payload } }
  }
}

export default CreateProductPage
