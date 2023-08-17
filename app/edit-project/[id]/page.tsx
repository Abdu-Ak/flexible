import { ProjectInterface } from '@/common.types'
import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { getProjectDetails } from '@/lib/actions'
import { getCurrentUer } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

const EditProject =async({params  :{ id}} : {params : { id: string}}) => {
  const session = await getCurrentUer()

  if (!session.user) redirect('/')

  const result = await getProjectDetails(id) as { project? : ProjectInterface}
 
  return (
    <Modal>
        <h3 className='modal-head-text'> Edit Project</h3>

        <ProjectForm type="edit" session={session} project={result?.project}/>
    </Modal>
  )
}

export default EditProject