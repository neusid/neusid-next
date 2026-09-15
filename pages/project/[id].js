import Layout from "@/components/layout/Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent"
import { GetProjectsUseCase } from "@/core/use-cases/GetProjectsUseCase"

export default function ProjectDetails({ initialProject }) {
    const router = useRouter()
    const [project, setProject] = useState(initialProject)
    const { id } = router.query

    useEffect(() => {
        if (!router.isReady) return

        const sessionWorks = sessionStorage.getItem("fromWorks")
        if (!sessionWorks) {
            router.replace("/blocked")
            return
        }

        if (!project && id) {
            fetch("/api/projects")
                .then((res) => res.json())
                .then((data) => {
                    if (data.projects) {
                        const found = data.projects.find(
                            (p) => String(p.id) === String(id)
                        )
                        if (found) setProject(found)
                    }
                })
                .catch(console.error)
        }
    }, [id, router.isReady, project, router])

    if (!project) return null

    return (
        <Layout footerStyle={2}>
            <ProjectDetailsContent project={project} id={id} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    try {
        const { id } = context.params
        const projects = await GetProjectsUseCase.execute()
        const project = projects.find((p) => String(p.id) === String(id)) || null

        return {
            props: {
                initialProject: project ? JSON.parse(JSON.stringify(project)) : null,
            },
        }
    } catch (error) {
        console.error("Error in getServerSideProps for project/[id]:", error)
        return {
            props: {
                initialProject: null,
            },
        }
    }
}
