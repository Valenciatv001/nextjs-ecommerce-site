import React from 'react'
import Link from 'next/link'

const Cancel = () => {
  return (
    <div className="success-wrapper">
        <div className="success">
        <h2 style={{color:"red"}}> An error occured during payment!</h2>
        <p className="email-msg">Check your items again!</p>
        <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
            order@example.com
            </a>
        </p>
        <Link href="/">
            <button type="button" width="300px" className="btn">
            Back to Shopping
            </button>
        </Link>
        </div>
    </div>
  )
}

export default Cancel