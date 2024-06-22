import Archive from '../components/archive'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jay M Gonzalez - Portfilio Site - Archive',
  description: 'An Archive of all the projects I have worked on.',
}

const ArchivePage = () => {
  return <Archive />
}

export default ArchivePage
