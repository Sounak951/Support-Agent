import DashBoardClient from '@/components/DashBoardClient'
import { getSession } from '@/lib/getSession'
import React from 'react'

async function page() {
  const session=await getSession()

  return (
    <>
      <DashBoardClient ownerId={session?.user?.id!}/>
    </>
  )
}

export default page
