interface ProfilePagePropsType {
    data: {
        profilePic: string,
        profileBackgroundPic: string,
        name: string,
        designation: string,
        socialLinks: Array<{
            name: string,
            url: string
        }>,
        starred: number,
        pinned: number,
        likes: number,
        views: number,
        verified: boolean,
        premium: boolean,
        followers: number,
        following: number,
        posts: Array<PostType>
    }
}

interface PostType {
    title: string,
    description: Array<string | Array<string>>,
    category: string,
    author: string,
    readingTime: string,
    timeStamp: string,
    views: number
}

interface PostCardPropsType {
    key?: string|number,
    data: PostType
}

interface DisplayFieldPropsType {
    key?: string|number,
    data: string | Array<string>
}
interface DisplayButtonPropsType {
    key?: string|number,
    data: string,
    value: number
}