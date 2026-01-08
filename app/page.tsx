'use client'

import { useQuery, gql } from '@apollo/client'
import { useState } from 'react'

// Example GraphQL query - adjust based on your backend schema
const GET_PROPERTIES = gql`
  query GetProperties {
    properties {
      id
      title
      location
      price
      bedrooms
      bathrooms
      area
      image
    }
  }
`

interface Property {
  id: string
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  area: number
  image?: string
}

export default function Home() {
  const { loading, error, data } = useQuery<{ properties: Property[] }>(GET_PROPERTIES)
  const [apiUrl] = useState(process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'Not configured in .env file')

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading properties...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error loading properties</h2>
          <p>{error.message}</p>
          <p className="info">API URL: {apiUrl}</p>
          <p className="info">Make sure your backend GraphQL API is running and accessible.</p>
        </div>
      </div>
    )
  }

  const properties = data?.properties || []

  return (
    <div className="container">
      <header>
        <h1>🏠 Sunny Props</h1>
        <p className="subtitle">Real Estate Property Listings</p>
      </header>

      <div className="info-banner">
        <p>Connected to: {apiUrl}</p>
      </div>

      {properties.length === 0 ? (
        <div className="empty-state">
          <h2>No properties found</h2>
          <p>The backend API is connected, but no properties are available.</p>
          <p>This might be because:</p>
          <ul>
            <li>The backend schema doesn't have a "properties" query</li>
            <li>The query needs to be adjusted to match your backend</li>
            <li>No properties exist in the database yet</li>
          </ul>
        </div>
      ) : (
        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              {property.image && (
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                </div>
              )}
              <div className="property-content">
                <h3>{property.title}</h3>
                <p className="location">📍 {property.location}</p>
                <p className="price">₹{property.price.toLocaleString()}</p>
                <div className="property-details">
                  <span>🛏️ {property.bedrooms} Beds</span>
                  <span>🚿 {property.bathrooms} Baths</span>
                  <span>📐 {property.area} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

