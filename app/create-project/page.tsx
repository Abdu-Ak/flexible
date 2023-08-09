import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { getCurrentUer } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateProject =async() => {
  const session = await getCurrentUer()

  if (!session.user) redirect('/')
 
  return (
    <Modal>
        <h3 className='model-head-text'> Create a New Project</h3>

        <ProjectForm type="create" session={session}/>
    </Modal>
  )
}

export default CreateProject