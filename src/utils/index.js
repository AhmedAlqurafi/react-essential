import metadata from "@/config/metadata"

export const Metadata = (title, description, subject) => { 
    return {...metadata, title, description, subject}
}