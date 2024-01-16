import React from 'react'

import AchievementSection from '/sections/AchievementSection'


export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || ''
  return {
    title: `Achievements | ${previousTitle}`,
  }
}

export default function AchievementsPage() {
  return (
    <AchievementSection layoutPadding={true} />
  )
}
