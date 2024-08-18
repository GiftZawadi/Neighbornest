import React from 'react'
import ResidentNewsCard from './ResidentNewsCard'
import ResidentNewsForm from './ResidentNewsForm'
import ResidentLayout from './ResidentLayout'
const ResidentNews = () => {
  return (
        <ResidentLayout>
            <ResidentNewsCard/>
            <ResidentNewsForm/>
        </ResidentLayout>
    
  )
}

export default ResidentNews