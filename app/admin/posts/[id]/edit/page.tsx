import { AdminLayout } from "@/components/admin-layout"
import { PostEditor } from "@/components/post-editor"

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default function EditPostPage({ params }: EditPostPageProps) {
  return (
    <AdminLayout>
      <PostEditor postId={params.id} />
    </AdminLayout>
  )
}
