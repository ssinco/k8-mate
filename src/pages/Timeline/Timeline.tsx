import React from 'react'
import { Chrono } from 'react-chrono'
import '../../index.css'

const features = [
  {
    title: "AI Integration",
    cardTitle: "Cluster info summarization",
    cardSubtitle: "Use AI to generate summaries of cluster performance.",
    cardDetailedText: "We will integrate AI to analyze and summarize the Kubernetes cluster performance, providing insights for admins and developers in an easy-to-read format."
  },
  {
    title: "Multiple cluster recognition",
    cardTitle: "Monitor multiple clusters",
    cardSubtitle: "Instantly swap to a different Kubernetees cluster.",
    cardDetailedText: "Implement a multi-view feature that can instantly swap to another active Kubernetes cluster"
  },
  {
    title: "Customize components",
    cardTitle: "Analytics Dashboard",
    cardSubtitle: "Scale, delete, restart, or rollback resources",
    cardDetailedText: "Create an easy-to-use interface to scale, delete, restart or rollback cluster resources like pods, nodes, and deployments."
  },
  // {
  //   title: "Q2 2025",
  //   cardTitle: "Mobile App Release",
  //   cardSubtitle: "Cross-platform support for iOS and Android.",
  //   cardDetailedText: "Launch the mobile version of the app with all core functionalities."
  // }
]

const Timeline = () => {
  return (
    <>
    <div
      id='next-features'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <div style={{ 
        width: "50%", 
        height: "750px",
        
        }}>
        <Chrono
          items={features}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "black",
            secondary: "white",
            cardBgColor: "#fff",
            cardForeColor: "#6001d2",
          }}
          activeItemIndex={null}
          cardHeight={200}
          cardWidth={300}
          disableControls={true}
          disableToolbar={true}	
        />
      </div>
    </div>
    </>
  )
}

export default Timeline