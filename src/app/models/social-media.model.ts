export type post = {
    id: number,
    user: string,
    title: string,
    post: string | null,
    time: string | Date | null,
    content: string | null,
    postLiked: boolean,
    likeCount?: number
}

export type comment = {
    
}