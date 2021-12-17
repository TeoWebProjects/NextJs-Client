import React from 'react'
import Theme from '../../Theme'

const ProfilePage = ({ data }) => {
  return (
    <Theme>
      {data.message?.length > 0 ? <>{data.message}</> : <>Profile Page</>}
      {console.log(data)}
    </Theme>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const cookies = context.req.cookies
  let data
  if (cookies.userInfo && cookies.userInfo.length > 0) {
    const token = JSON.parse(cookies.userInfo).token
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const quey = await fetch('http://localhost:5000/api/users/profile', config)
    data = await quey.json()

    return { props: { data } }
  } else {
    data = { message: 'No auth' }
    return { props: { data } }
  }
}

export default ProfilePage
