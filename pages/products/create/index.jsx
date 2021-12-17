import React from 'react'
import Theme from '../../../Theme'

const CreateProductPage = ({ data }) => {
  return <Theme>{data.isAdmin === false ? <>No auth</> : <>Create Product</>}</Theme>
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const cookies = context.req.cookies
  let data
  if (cookies.userInfo && cookies.userInfo.length > 0) {
    if (JSON.parse(cookies.userInfo).isAdmin === true) {
      data = { isAdmin: true }
      return { props: { data } }
    } else {
      data = { isAdmin: false }
      return { props: { data } }
    }
  } else {
    data = { isAdmin: false }
    return { props: { data } }
  }
}

export default CreateProductPage
