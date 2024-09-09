import React from 'react'
import { Chrono } from 'react-chrono'

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
      <div style={{ width: "100%", height: "500px" }}>
      <Chrono
        items={features}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#6001d2",
          secondary: "#cbd5e1",
          cardBgColor: "#fff",
          cardForeColor: "#6001d2",
        }}
        cardHeight={200}
        cardWidth={300}
        disableControls={true}
      />
    </div>
  )
}

export default Timeline