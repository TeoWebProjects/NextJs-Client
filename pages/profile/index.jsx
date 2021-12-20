import React from 'react'
import Theme from '../../Theme'
import {
  Container,
  ErrorText,
  ProfileBoard,
  Feature,
  FeatureIcon,
  FeatureText,
  Heading,
  HeadingWelcome,
  HeadingText,
} from './ProfilePage.style'
import { CgProfile } from 'react-icons/cg'
import { FaRegAddressCard } from 'react-icons/fa'
import { RiShoppingBasketLine } from 'react-icons/ri'
import Link from 'next/link'

const ProfilePage = ({ data }) => {
  return (
    <Theme>
      <Container>
        {data.message?.length > 0 ? (
          <ErrorText>{data.message}</ErrorText>
        ) : (
          <>
            <Heading>
              <HeadingWelcome>
                Γεια σας <span style={{ fontWeight: 'bold' }}>{data.name}</span>
              </HeadingWelcome>
              <HeadingText>
                Από τον πίνακα ελέγχου του λογαριασμού σας μπορείτε να δείτε τις πρόσφατες παραγγελίες σας, να
                διαχειριστείτε τις διευθύνσεις αποστολής και χρέωσης και να επεξεργασθείτε το συνθηματικό σας και τις
                λεπτομέρειες του λογαριασμού σας.
              </HeadingText>
            </Heading>
            <ProfileBoard>
              <Link href="http://localhost:3000/profile/orders">
                <Feature>
                  <FeatureIcon>
                    <RiShoppingBasketLine />
                  </FeatureIcon>
                  <FeatureText>Παραγγελίες</FeatureText>
                </Feature>
              </Link>
              <Feature>
                <FeatureIcon>
                  <CgProfile />
                </FeatureIcon>
                <FeatureText>Στοιχεία Λογαριασμού</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaRegAddressCard />
                </FeatureIcon>
                <FeatureText>Διεύθυνση</FeatureText>
              </Feature>
            </ProfileBoard>
          </>
        )}
        {console.log(data)}
      </Container>
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
