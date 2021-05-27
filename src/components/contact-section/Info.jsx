import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'

import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './info.css'

const contactDetails = [
  {
    value: 'Calgary, Alberta.',
    icon: locationIcon,
  },
  { value: '+1 234 567 8900', icon: phoneIcon },
  { value: 'support@example.com', icon: emailIcon },
]

const ContactDetails = () =>
  contactDetails.map(detail => (
    <p key={detail.value} className="info-detail">
      <InlineIcon icon={detail.icon} /> {detail.value}
    </p>
  ))

const Icons = () =>
  [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
    <Icon icon={icon} key={key} className="info-icon" />
  ))

const Info = () => (
  <section className="info">
    <h2 className="info-h2">Addrees for on-map location ⇓</h2>

    <div className="info-details-container">{ContactDetails()}</div>

    <div className="info-icons-container">{Icons()}</div>
  </section>
)

export default Info
